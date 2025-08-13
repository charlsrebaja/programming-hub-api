"use client";

import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ClientButton() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    return (
      <Button size="lg" onClick={() => router.push("/dashboard")}>
        Go to Dashboard
      </Button>
    );
  }

  return (
    <Button
      size="lg"
      onClick={() => signIn("google")}
      className="animate-fade-in"
    >
      Get Started Now
    </Button>
  );
}
