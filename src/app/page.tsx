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
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-4 -top-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob"></div>
          <div className="absolute -right-4 -top-4 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className="text-left space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500/10 to-violet-500/10 text-blue-600 dark:text-blue-400">
                    <svg
                      className="mr-1.5 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-7.208a2.5 2.5 0 111.384-3.291A2.5 2.5 0 0111 12.792z" />
                    </svg>
                    Interactive Learning Platform
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
                    Learn, Create, and
                  </span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-600">
                    Explore through Code
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-xl">
                  Master programming through hands-on lessons, real-world
                  projects, and interactive challenges.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {session ? (
                  <>
                    <Button
                      size="lg"
                      onClick={() => router.push("/lessons")}
                      className="relative group overflow-hidden bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className="relative z-10">Continue Learning</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => router.push("/profile")}
                      className="border-2 hover:-translate-y-1 transition-transform duration-300"
                    >
                      View Profile
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      size="lg"
                      onClick={() => router.push("/login")}
                      className="relative group overflow-hidden bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className="relative z-10">Get Started Now</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => router.push("/")}
                      className="border-2 hover:-translate-y-1 transition-transform duration-300"
                    >
                      Learn More
                    </Button>
                  </>
                )}
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
                    1000+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Lessons
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-600">
                    50K+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Students
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-600">
                    98%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Success Rate
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Illustration */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[600px]">
                {/* Background decorative element */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-3xl transform rotate-3 transition-transform duration-300 hover:rotate-0"></div>

                {/* Main container */}
                <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
                  {/* Code editor header */}
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300">
                        main.py
                      </div>
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="p-6 space-y-6">
                    {/* Main Image */}
                    <div className="flex justify-center items-center p-6">
                      <div className="relative group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                        <Image
                          src="/images/hero-code1.png"
                          alt="Programming Interface"
                          width={480}
                          height={320}
                          className="rounded-xl shadow-2xl transform transition-all duration-500 group-hover:scale-[1.01]"
                          priority
                        />
                      </div>
                    </div>

                    {/* Interactive elements */}
                    <div className="absolute bottom-6 right-6 left-6">
                      <div className="bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-xl p-4 backdrop-blur-sm">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-8 bg-blue-500 rounded-full animate-pulse"></div>
                          <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                            Interactive Learning Environment
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
<section className="py-24 px-4 bg-white dark:from-gray-900 dark:to-gray-800">
  <div className="container mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
        Why Choose Our Platform?
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Experience a new way of learning programming with our innovative features
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card className="group shadow-md hover:shadow-xl transition-all duration-300 border-0">
        <CardHeader className="space-y-4">
          <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-4xl">💻</span>
          </div>
          <CardTitle className="text-center text-xl">Learn by Doing</CardTitle>
          <CardDescription className="text-center">
            <div className="space-y-2">
              <p>Interactive coding exercises and real-world projects</p>
              <ul className="text-sm text-left space-y-1 mt-4">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Hands-on coding challenges
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

      <Card className="group shadow-md hover:shadow-xl transition-all duration-300 border-0">
        <CardHeader className="space-y-4">
          <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-4xl">🤝</span>
          </div>
          <CardTitle className="text-center text-xl">Collaborate</CardTitle>
          <CardDescription className="text-center">
            <div className="space-y-2">
              <p>Work with peers and learn from the community</p>
              <ul className="text-sm text-left space-y-1 mt-4">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Peer programming sessions
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

      <Card className="group shadow-md hover:shadow-xl transition-all duration-300 border-0">
        <CardHeader className="space-y-4">
          <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-4xl">📊</span>
          </div>
          <CardTitle className="text-center text-xl">Track Progress</CardTitle>
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
              onClick={() =>
                session ? router.push("/lessons") : signIn("google")
              }
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:opacity-90 transition-opacity"
            >
              {session ? "Continue Your Journey" : "Start Your Journey Now"}
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
                  width={50}
                  height={50}
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
