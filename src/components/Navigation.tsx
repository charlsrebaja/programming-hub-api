"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/code-logo.svg" alt="Logo" width={32} height={32} />
            <span className="font-bold text-xl">Programming Hub</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {!session ? (
            <>
              <Button
                variant="ghost"
                className="hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-violet-600/10"
                onClick={() => router.push("/login")}
              >
                Sign In
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:opacity-90 transition-opacity text-white"
                onClick={() => router.push("/register")}
              >
                Get Started
              </Button>
            </>
          ) : (
            <Button
              variant="ghost"
              onClick={() => signOut()}
              className="hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-violet-600/10"
            >
              Sign out
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
