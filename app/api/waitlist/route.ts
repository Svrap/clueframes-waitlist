import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Validation functions
function validateEmail(email: string): { valid: boolean; message?: string } {
  if (!email || typeof email !== "string") {
    return { valid: false, message: "Email is required" };
  }

  const trimmedEmail = email.trim().toLowerCase();

  // Length check
  if (trimmedEmail.length < 3 || trimmedEmail.length > 254) {
    return { valid: false, message: "Email must be between 3 and 254 characters" };
  }

  // RFC 5322 compliant email regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (!emailRegex.test(trimmedEmail)) {
    return { valid: false, message: "Please enter a valid email address" };
  }

  // Check for invalid patterns
  if (trimmedEmail.startsWith('.') || trimmedEmail.startsWith('@') || trimmedEmail.endsWith('@')) {
    return { valid: false, message: "Invalid email format" };
  }

  if (trimmedEmail.includes('..')) {
    return { valid: false, message: "Invalid email format" };
  }

  // Validate domain structure
  const parts = trimmedEmail.split('@');
  if (parts.length !== 2 || !parts[1].includes('.')) {
    return { valid: false, message: "Invalid email domain" };
  }

  const domainParts = parts[1].split('.');
  if (domainParts.length < 2 || domainParts[domainParts.length - 1].length < 2) {
    return { valid: false, message: "Invalid email domain" };
  }

  // Basic disposable email check (can be expanded)
  const disposableDomains = ['tempmail.com', 'throwaway.email', 'mailinator.com', 'guerrillamail.com'];
  const domain = parts[1].toLowerCase();
  if (disposableDomains.some(d => domain.includes(d))) {
    return { valid: false, message: "Please use a valid email address" };
  }

  return { valid: true };
}

function normalizeChannelUrl(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return trimmed;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

function validateChannelUrl(url: string): { valid: boolean; message?: string } {
  if (!url || typeof url !== "string" || url.trim() === "") {
    return { valid: false, message: "YouTube channel URL is required" };
  }

  const trimmedUrl = url.trim();
  if (trimmedUrl.length > 2048) {
    return { valid: false, message: "URL is too long" };
  }

  const toCheck = normalizeChannelUrl(trimmedUrl);
  try {
    const urlObj = new URL(toCheck);
    if (!["http:", "https:"].includes(urlObj.protocol)) {
      return { valid: false, message: "URL must use http or https protocol" };
    }
    if (!urlObj.hostname || urlObj.hostname.length === 0) {
      return { valid: false, message: "Invalid URL format" };
    }
    return { valid: true };
  } catch {
    return { valid: false, message: "Please enter a valid channel URL" };
  }
}

function validateName(name: string): { valid: boolean; message?: string } {
  if (!name || typeof name !== "string" || name.trim() === "") {
    return { valid: false, message: "Name is required" };
  }

  const trimmedName = name.trim();
  if (trimmedName.length < 2 || trimmedName.length > 100) {
    return { valid: false, message: "Name must be between 2 and 100 characters" };
  }

  const nameRegex = /^[a-zA-Z\s'.-]{2,100}$/;
  if (!nameRegex.test(trimmedName)) {
    return { valid: false, message: "Name can only contain letters, spaces, hyphens, apostrophes, and periods" };
  }

  if (trimmedName.includes('  ') || trimmedName.includes('--') || trimmedName.includes("''")) {
    return { valid: false, message: "Invalid name format" };
  }

  return { valid: true };
}

function sanitizeInput(input: string | null | undefined, maxLength: number = 1000): string | null {
  if (!input || typeof input !== "string") {
    return null;
  }
  return input.trim().slice(0, maxLength) || null;
}

export async function POST(request: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error("Supabase env not configured");
      return NextResponse.json(
        { success: false, message: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const body = await request.json();
    
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const name = sanitizeInput(body.name, 100);
    const channel_url = sanitizeInput(body.channel_url, 2048);

    // Validate email (required)
    const emailValidation = validateEmail(email);
    if (!emailValidation.valid) {
      return NextResponse.json(
        { success: false, message: emailValidation.message || "Invalid email" },
        { status: 400 }
      );
    }

    const nameValidation = validateName(name || "");
    if (!nameValidation.valid) {
      return NextResponse.json(
        { success: false, message: nameValidation.message || "Invalid name" },
        { status: 400 }
      );
    }

    const urlValidation = validateChannelUrl(channel_url || "");
    if (!urlValidation.valid) {
      return NextResponse.json(
        { success: false, message: urlValidation.message || "Invalid URL" },
        { status: 400 }
      );
    }

    const sanitizedName = name as string;
    const normalizedChannelUrl = normalizeChannelUrl(channel_url as string);

    // Check for duplicate email
    const { data: existing } = await supabase
      .from("waitlist_signups")
      .select("email")
      .eq("email", email)
      .limit(1);

    // If email already exists, return success (don't reveal to prevent enumeration)
    if (existing && existing.length > 0) {
      return NextResponse.json({ success: true });
    }

    const { error } = await supabase.from("waitlist_signups").insert({
      name: sanitizedName,
      email: email,
      channel_url: normalizedChannelUrl,
      created_at: new Date().toISOString(),
    });

    if (error) {
      // Check for duplicate key error (race condition)
      if (error.code === '23505' || error.message?.includes('duplicate')) {
        return NextResponse.json({ success: true });
      }
      
      console.error("Supabase error:", error);
      return NextResponse.json(
        { success: false, message: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

