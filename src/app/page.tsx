"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (session) {
      router.push("/lessons");
    }
  }, [session, router]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
            Learn, Create, and Explore through Code
          </h1>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            Hands-on lessons for future programmers
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              size="lg"
              onClick={() => router.push("/login")}
              className="animate-fade-in cursor-pointer bg-gradient-to-r from-blue-600 to-violet-600 hover:opacity-90 transition-opacity text-white"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-white  dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
              Why Choose Our Platform?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience a new way of learning programming with our innovative
              features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-500 dark:hover:border-blue-400">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">💻</span>
                </div>
                <CardTitle className="text-center text-xl">
                  Learn by Doing
                </CardTitle>
                <CardDescription className="text-center">
                  <div className="space-y-2">
                    <p>Interactive coding exercises and real-world projects</p>
                    <ul className="text-sm text-left space-y-1 mt-4">
                      <li className="flex items-center">
                        <span className="mr-2">✓</span> Hands-on coding
                        challenges
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✓</span> Real-time code execution
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✓</span> Project-based learning
                      </li>
                    </ul>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-violet-500 dark:hover:border-violet-400">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🤝</span>
                </div>
                <CardTitle className="text-center text-xl">
                  Collaborate
                </CardTitle>
                <CardDescription className="text-center">
                  <div className="space-y-2">
                    <p>Work with peers and learn from the community</p>
                    <ul className="text-sm text-left space-y-1 mt-4">
                      <li className="flex items-center">
                        <span className="mr-2">✓</span> Peer programming
                        sessions
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✓</span> Community discussions
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✓</span> Code reviews
                      </li>
                    </ul>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-indigo-500 dark:hover:border-indigo-400">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">📊</span>
                </div>
                <CardTitle className="text-center text-xl">
                  Track Progress
                </CardTitle>
                <CardDescription className="text-center">
                  <div className="space-y-2">
                    <p>Monitor your learning journey with detailed analytics</p>
                    <ul className="text-sm text-left space-y-1 mt-4">
                      <li className="flex items-center">
                        <span className="mr-2">✓</span> Progress visualization
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✓</span> Skill assessments
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✓</span> Achievement badges
                      </li>
                    </ul>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
              Start Your Learning Journey
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get started with these simple steps and begin your programming
              adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-600 to-violet-600 transform -translate-y-1/2" />

            {/* Step 1 */}
            <div className="relative group">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-2xl transform group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Sign in with Google
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                  Quick and secure authentication using your Google account
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="mr-2 text-green-500">✓</span>
                    One-click sign in
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="mr-2 text-green-500">✓</span>
                    Secure authentication
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-2xl transform group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Access Lessons
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                  Explore our comprehensive curriculum designed for all levels
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="mr-2 text-green-500">✓</span>
                    Structured learning path
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="mr-2 text-green-500">✓</span>
                    Interactive tutorials
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-2xl transform group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Track Progress
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                  Monitor your learning journey with detailed insights
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="mr-2 text-green-500">✓</span>
                    Progress dashboard
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="mr-2 text-green-500">✓</span>
                    Achievement system
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              onClick={() => signIn("google")}
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:opacity-90 transition-opacity"
            >
              Start Your Journey Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                />
                <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
                  Programming Hub
                </span>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
                Empowering the next generation of developers with interactive
                learning experiences and hands-on coding practice.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lessons"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                  >
                    Lessons
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Interactive Programming Hub. All
                rights reserved.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <Link
                  href="/accessibility"
                  className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                  Accessibility
                </Link>
                <span>•</span>
                <Link
                  href="/sitemap"
                  className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
