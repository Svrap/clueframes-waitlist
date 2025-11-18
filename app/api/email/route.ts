import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);

// Styled HTML email template
const getEmailHTML = () => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to ClueFrames</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a; color: #ffffff;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #0a0a0a;">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #1a1a1a; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 30px 40px; text-align: center; background: linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%);">
              <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -0.5px; color: #f97316; background: linear-gradient(135deg, #f97316 0%, #ef4444 50%, #dc2626 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                ClueFrames
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px 40px 40px 40px;">
              <h2 style="margin: 0 0 24px 0; font-size: 24px; font-weight: 600; color: #ffffff; line-height: 1.4;">
                Hey Creator 👋
              </h2>
              
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.7; color: #e5e5e5;">
                Welcome to <strong style="color: #f97316;">ClueFrames</strong>! We're thrilled to have you join our beta waitlist.
              </p>
              
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.7; color: #e5e5e5;">
                ClueFrames is an AI-powered pre-production studio designed specifically for video creators like you. We help you turn your ideas into polished scripts and storyboards in minutes, not days—cutting your pre-production time by 70–90%.
              </p>
              
              <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.7; color: #e5e5e5;">
                You'll be among the first to know when we launch, and we'll make sure you have early access to all the tools you need to streamline your creative workflow.
              </p>
              
              <p style="margin: 0; font-size: 16px; line-height: 1.7; color: #e5e5e5; font-style: italic;">
                — The ClueFrames Team 🚀
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; text-align: center; background-color: #0f0f0f; border-top: 1px solid #2a2a2a;">
              <p style="margin: 0; font-size: 12px; color: #888888; line-height: 1.6;">
                © 2025 ClueFrames. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
};

export async function POST(request: NextRequest) {
  let emailSent = false;
  let loggedToSupabase = false;
  let errorDetails: any = {};

  try {
    // Check if required environment variables are configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { success: false, message: "Email service is not configured" },
        { status: 500 }
      );
    }

    // Check Supabase env vars - try both naming conventions
    const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("Supabase environment variables are not configured");
      console.error("SUPABASE_URL:", !!process.env.SUPABASE_URL, "NEXT_PUBLIC_SUPABASE_URL:", !!process.env.NEXT_PUBLIC_SUPABASE_URL);
      console.error("SUPABASE_SERVICE_ROLE_KEY:", !!supabaseServiceKey);
      return NextResponse.json(
        { success: false, message: "Database service is not configured" },
        { status: 500 }
      );
    }

    // Reinitialize Supabase client with correct env vars
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Parse request body
    const body = await request.json();
    const email = body.email;

    // Validate email
    if (!email || typeof email !== "string" || email.trim() === "") {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const trimmedEmail = email.trim().toLowerCase();
    
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Step 1: Send email via Resend
    try {
      const { data, error } = await resend.emails.send({
        from: "ClueFrames <hello@clueframes.com>",
        to: trimmedEmail,
        subject: "🎬 Welcome to ClueFrames Beta!",
        html: getEmailHTML(),
      });

      if (error) {
        console.error("Resend error:", JSON.stringify(error, null, 2));
        errorDetails.resendError = error;
        // Continue to Supabase logging even if email fails
      } else {
        emailSent = true;
        console.log("Email sent successfully to:", trimmedEmail);
      }
    } catch (emailError: any) {
      console.error("Email sending exception:", emailError);
      errorDetails.emailException = emailError?.message || String(emailError);
      // Continue to Supabase logging even if email fails
    }

    // Step 2: Log to Supabase
    try {
      const { data: insertData, error: supabaseError } = await supabase
        .from("waitlist_users")
        .insert([{ email: trimmedEmail, source: "waitlist" }])
        .select();

      if (supabaseError) {
        console.error("Supabase insert error:", JSON.stringify(supabaseError, null, 2));
        console.error("Error code:", supabaseError.code);
        console.error("Error message:", supabaseError.message);
        console.error("Error details:", supabaseError.details);
        console.error("Error hint:", supabaseError.hint);
        
        errorDetails.supabaseError = {
          code: supabaseError.code,
          message: supabaseError.message,
          details: supabaseError.details,
          hint: supabaseError.hint,
        };

        // Check if it's a duplicate key error (email already exists)
        if (
          supabaseError.code === "23505" ||
          supabaseError.code === "PGRST116" ||
          supabaseError.message?.includes("duplicate") ||
          supabaseError.message?.includes("unique") ||
          supabaseError.message?.includes("already exists")
        ) {
          // Email already exists, skip silently
          loggedToSupabase = false;
          console.log("Email already exists in waitlist_users, skipping insert");
        } else {
          // Other error - log it but continue
          console.error("Supabase insert failed with non-duplicate error");
        }
      } else {
        loggedToSupabase = true;
        console.log("Successfully logged to Supabase:", insertData);
      }
    } catch (supabaseError: any) {
      console.error("Supabase insertion exception:", supabaseError);
      errorDetails.supabaseException = supabaseError?.message || String(supabaseError);
      // Continue execution even if Supabase insert fails
    }

    // Return success response with status flags
    // Include error details in development for debugging
    const response: any = {
      success: true,
      emailSent: emailSent,
      loggedToSupabase: loggedToSupabase,
    };

    // Include error details in development mode for debugging
    if (process.env.NODE_ENV === "development" && Object.keys(errorDetails).length > 0) {
      response.errorDetails = errorDetails;
    }

    return NextResponse.json(response);
  } catch (error: any) {
    console.error("API error:", error);
    console.error("Error stack:", error?.stack);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again.",
        emailSent: emailSent,
        loggedToSupabase: loggedToSupabase,
        ...(process.env.NODE_ENV === "development" && { error: error?.message }),
      },
      { status: 500 }
    );
  }
}

