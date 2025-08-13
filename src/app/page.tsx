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
          <Button
            size="lg"
            onClick={() => signIn("google")}
            className="animate-fade-in cursor-pointer"
          >
            Get Started Now
          </Button>
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
      <footer className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-8 mb-4 md:mb-0">
              <a href="/about" className="hover:text-blue-600">
                About
              </a>
              <a href="/contact" className="hover:text-blue-600">
                Contact
              </a>
              <a href="/privacy" className="hover:text-blue-600">
                Privacy Policy
              </a>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 Interactive Programming Hub. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
