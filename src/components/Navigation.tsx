"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  LogOut,
  User,
  Layers,
  Award,
} from "lucide-react";

export default function Navigation() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Handle clicking outside of profile menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setShowProfileMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Logo" width={62} height={62} />
            <span className="font-bold text-xl">Programming Hub</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-4">
          {!session ? (
            <>
              <Button
                variant="ghost"
                className="border border-gray-300 hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-violet-600/10"
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
            <div className="flex items-center gap-4">
              <Link
                href="/lessons"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Lessons
              </Link>
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-2 focus:outline-none"
                >
                  <div className="relative h-8 w-8 rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-gray-700">
                    {session?.user?.image ? (
                      <Image
                        src={session.user.image}
                        alt="Profile"
                        layout="fill"
                        className="object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center text-white text-sm font-medium">
                        {session?.user?.name?.charAt(0) || "U"}
                      </div>
                    )}
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${
                      showProfileMenu ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Profile Dropdown Menu */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-gray-800 py-2 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
                    <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {session?.user?.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {session?.user?.email}
                      </p>
                    </div>
                    <div className="py-1">
                      <Link
                        href="/profile"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <User className="h-4 w-4" />
                        Profile
                      </Link>
                      <Link
                        href="/lessons"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Layers className="h-4 w-4" />
                        My Lessons
                      </Link>
                      <Link
                        href="/achievements"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Award className="h-4 w-4" />
                        Achievements
                      </Link>
                      <button
                        onClick={() => signOut()}
                        className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                      >
                        <LogOut className="h-4 w-4" />
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } border-t border-gray-200 dark:border-gray-700`}
      >
        <div className="container py-4">
          {!session ? (
            <div className="space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-violet-600/10"
                onClick={() => {
                  router.push("/login");
                  setIsOpen(false);
                }}
              >
                Sign In
              </Button>
              <Button
                className="w-full justify-start bg-gradient-to-r from-blue-600 to-violet-600 hover:opacity-90 transition-opacity text-white"
                onClick={() => {
                  router.push("/register");
                  setIsOpen(false);
                }}
              >
                Get Started
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Profile Info */}
              <div className="flex items-center gap-3 px-1 py-2">
                <div className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-gray-700">
                  {session.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt="Profile"
                      layout="fill"
                      className="object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center text-white text-sm font-medium">
                      {session.user?.name?.charAt(0) || "U"}
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    {session.user?.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    {session.user?.email}
                  </p>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="space-y-1">
                <Link
                  href="/lessons"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <Layers className="h-4 w-4" />
                  My Lessons
                </Link>
                <Link
                  href="/profile"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="h-4 w-4" />
                  Profile
                </Link>
                <Link
                  href="/achievements"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <Award className="h-4 w-4" />
                  Achievements
                </Link>
                <button
                  onClick={() => {
                    signOut();
                    setIsOpen(false);
                  }}
                  className="flex w-full items-center gap-2 px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
