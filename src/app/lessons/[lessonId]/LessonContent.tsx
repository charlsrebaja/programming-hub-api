"use client";

import type { Lesson } from "@/data/lessons";
import { lessons } from "@/data/lessons";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";

interface UserProgress {
  completedLessons: string[];
  lastVisited: string | null;
  totalPoints: number;
}

export default function LessonContent({ lesson }: { lesson: Lesson }) {
  const { data: session } = useSession();
  const [isCompleted, setIsCompleted] = useState(false);
  const [showHint, setShowHint] = useState<number | null>(null);
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const router = useRouter();

  // Load completion status on mount
  useEffect(() => {
    if (session?.user?.email) {
      const savedProgress = localStorage.getItem(
        `progress_${session.user.email}`
      );
      if (savedProgress) {
        const progress: UserProgress = JSON.parse(savedProgress);
        setIsCompleted(progress.completedLessons.includes(lesson.id));
      }
    }
  }, [session, lesson.id]);

  const markAsCompleted = () => {
    if (!session?.user?.email) return;

    const savedProgress = localStorage.getItem(
      `progress_${session.user.email}`
    );
    const currentProgress: UserProgress = savedProgress
      ? JSON.parse(savedProgress)
      : {
          completedLessons: [],
          lastVisited: null,
          totalPoints: 0,
        };

    // Only update if not already completed
    if (!currentProgress.completedLessons.includes(lesson.id)) {
      const newProgress: UserProgress = {
        ...currentProgress,
        completedLessons: [...currentProgress.completedLessons, lesson.id],
        lastVisited: lesson.id,
        totalPoints: currentProgress.totalPoints + lesson.points,
      };

      // Save to localStorage
      localStorage.setItem(
        `progress_${session.user.email}`,
        JSON.stringify(newProgress)
      );

      setIsCompleted(true);
    }
  };

  const nextLesson = lessons.find((l) => l.order === lesson.order + 1);
  const previousLesson = lessons.find((l) => l.order === lesson.order - 1);

  useEffect(() => {
    // Highlight all code blocks on mount and when snippets change
    Prism.highlightAll();
  }, [currentSnippetIndex, showHint]);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      {/* Navigation and Progress */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-4">
          {previousLesson && (
            <button
              onClick={() => router.push(`/lessons/${previousLesson.id}`)}
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Previous Lesson
            </button>
          )}
        </div>
        <div className="flex space-x-4">
          {nextLesson && (
            <button
              onClick={() => router.push(`/lessons/${nextLesson.id}`)}
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Next Lesson
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Video and Content */}
        <div className="lg:col-span-2 space-y-6">
          {lesson.videoUrl && (
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg">
              <iframe
                src={lesson.videoUrl}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                title={lesson.title}
              />
            </div>
          )}

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {lesson.title}
            </h1>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                {lesson.level}
              </span>
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400">
                {lesson.category}
              </span>
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                {lesson.estimatedTime}
              </span>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              {/* Using a div instead of Markdown component for now */}
              <div
                dangerouslySetInnerHTML={{
                  __html: lesson.content.replace(/\\n/g, "<br>"),
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Column - Code Snippets and Completion */}
        <div className="lg:col-span-1 space-y-6">
          {/* Code Snippets */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Code Examples</h3>
            <div className="space-y-4">
              {lesson.codeSnippets.map((snippet, index) => (
                <div
                  key={index}
                  className={`${
                    currentSnippetIndex === index ? "ring-2 ring-blue-500" : ""
                  } rounded-lg overflow-hidden`}
                >
                  <div className="bg-gray-100 dark:bg-gray-900 p-4 relative">
                    <pre className="text-sm overflow-x-auto">
                      <code className={`language-${snippet.language}`}>
                        {snippet.code}
                      </code>
                    </pre>
                    <button
                      onClick={() =>
                        setShowHint(showHint === index ? null : index)
                      }
                      className="absolute top-2 right-2 text-gray-400 hover:text-blue-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  {showHint === index && (
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 text-sm text-gray-600 dark:text-gray-300">
                      {snippet.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mark as Completed */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Progress</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                {isCompleted
                  ? "Great job completing this lesson! 🎉"
                  : "Ready to mark this lesson as completed?"}
              </p>
              {session ? (
                <button
                  onClick={markAsCompleted}
                  disabled={isCompleted}
                  className={`w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isCompleted
                      ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-700 hover:to-violet-700"
                  }`}
                >
                  {isCompleted ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Completed!
                    </span>
                  ) : (
                    "Mark as Completed"
                  )}
                </button>
              ) : (
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Please{" "}
                  <button
                    onClick={() => router.push("/login")}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    sign in
                  </button>{" "}
                  to track your progress
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
