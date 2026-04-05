"use server";

import { supabase } from "@/lib/supabase/client";

export async function submitWaitlist(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const channelUrl = formData.get("channelUrl") as string;
  const category = formData.get("category") as string;

  const { error } = await supabase.from("waitlist_submissions").insert({
    name,
    email,
    channel_url: channelUrl,
    category,
  });

  if (error) {
    console.error(error);
    return { success: false, message: "Failed to join waitlist" };
  }

  return { success: true };
}

