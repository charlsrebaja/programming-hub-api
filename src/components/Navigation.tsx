"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Logo" width={55} height={55} />
            <span className="font-bold text-xl">Programming Hub</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {!session ? (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">Sign in</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Get Started</Link>
              </Button>
            </>
          ) : (
            <Button variant="ghost" onClick={() => signOut()}>
              Sign out
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
