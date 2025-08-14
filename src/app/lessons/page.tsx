"use client";

import { lessons } from "@/data/lessons";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { BookOpen, Award, Trophy, ArrowLeft } from "lucide-react";

interface UserProgress {
  completedLessons: string[];
  lastVisited: string | null;
  totalPoints: number;
}

export default function LessonsPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [userProgress, setUserProgress] = useState<UserProgress>({
    completedLessons: [],
    lastVisited: null,
    totalPoints: 0,
  });
  const [showWelcomeBack, setShowWelcomeBack] = useState(false);

  // Load user progress from localStorage
  useEffect(() => {
    if (session?.user?.email) {
      const savedProgress = localStorage.getItem(
        `progress_${session.user.email}`
      );
      if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        setUserProgress(progress);
        setCompletedLessons(progress.completedLessons);

        // Show welcome back message if there's a last visited lesson
        if (progress.lastVisited) {
          setShowWelcomeBack(true);
          setTimeout(() => setShowWelcomeBack(false), 5000); // Hide after 5 seconds
        }
      }
    }
  }, [session]);

  // Save progress to localStorage
  const saveProgress = (progress: UserProgress) => {
    if (session?.user?.email) {
      localStorage.setItem(
        `progress_${session.user.email}`,
        JSON.stringify(progress)
      );
      setUserProgress(progress);
    }
  };

  // Handle lesson completion
  const handleLessonComplete = (lessonId: string) => {
    const lesson = lessons.find((l) => l.id === lessonId);
    if (!lesson) return;

    const newCompletedLessons = [...completedLessons, lessonId];
    setCompletedLessons(newCompletedLessons);

    const newProgress = {
      ...userProgress,
      completedLessons: newCompletedLessons,
      totalPoints: userProgress.totalPoints + lesson.points,
      lastVisited: lessonId,
    };

    saveProgress(newProgress);
  };

  const categories = [
    { id: "all", name: "All Lessons" },
    { id: "general", name: "Programming Fundamentals" },
    { id: "web", name: "Web Development" },
    { id: "python", name: "Python" },
    { id: "javascript", name: "JavaScript" },
  ];

  const filteredLessons = lessons.filter(
    (lesson) =>
      selectedCategory === "all" || lesson.category === selectedCategory
  );

  const totalPoints = completedLessons.reduce((acc, lessonId) => {
    const lesson = lessons.find((l) => l.id === lessonId);
    return acc + (lesson?.points || 0);
  }, 0);

  const progressPercentage = (completedLessons.length / lessons.length) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => router.push("/")}
        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </button>

      {/* Welcome Back Message */}
      {showWelcomeBack && userProgress.lastVisited && (
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl border border-blue-100 dark:border-blue-800">
          <div className="flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <p className="text-blue-600 dark:text-blue-400">
              Welcome back! Continue from{" "}
              <button
                onClick={() =>
                  router.push(`/lessons/${userProgress.lastVisited}`)
                }
                className="font-medium underline hover:text-blue-700 dark:hover:text-blue-300"
              >
                your last lesson
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Progress Overview */}
      <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Your Learning Journey
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Track your progress and earn points as you learn
            </p>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 mb-2">
                <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-2xl font-bold text-blue-600">
                {completedLessons.length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Lessons Completed
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-full bg-violet-100 dark:bg-violet-900/30 p-3 mb-2">
                <Trophy className="h-6 w-6 text-violet-600 dark:text-violet-400" />
              </div>
              <p className="text-2xl font-bold text-violet-600">
                {userProgress.totalPoints}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Total Points
              </p>
            </div>
            {completedLessons.length >= 3 && (
              <div className="text-center">
                <div className="rounded-full bg-amber-100 dark:bg-amber-900/30 p-3 mb-2">
                  <Award className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <p className="text-2xl font-bold text-amber-600">
                  {Math.floor(completedLessons.length / 3)}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Achievements
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>
              {completedLessons.length} of {lessons.length} completed
            </span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-violet-600 transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLessons.map((lesson) => {
          const isCompleted = completedLessons.includes(lesson.id);
          const prerequisites = lesson.prerequisites || [];
          const canStart = prerequisites.every((preq) =>
            completedLessons.includes(preq)
          );

          return (
            <div
              key={lesson.id}
              className="relative group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <div className="absolute top-4 right-4 flex items-center gap-2">
                {isCompleted && (
                  <div className="text-green-500 bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                )}
                {userProgress.lastVisited === lesson.id && (
                  <div className="text-blue-500 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                    <BookOpen className="h-5 w-5" />
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  {lesson.level}
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400">
                  {lesson.category}
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                  {lesson.estimatedTime}
                </span>
              </div>

              <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {lesson.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {lesson.description}
              </p>

              {prerequisites.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Prerequisites:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {prerequisites.map((preqId) => {
                      const preq = lessons.find((l) => l.id === preqId);
                      const isPreqCompleted = completedLessons.includes(preqId);
                      return (
                        <span
                          key={preqId}
                          className={`text-xs px-2 py-1 rounded-md ${
                            isPreqCompleted
                              ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                              : "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400"
                          }`}
                        >
                          {preq?.title}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}

              {!canStart && (
                <p className="text-sm text-amber-600 dark:text-amber-400 mb-4 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Complete prerequisites to unlock
                </p>
              )}

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                  <span className="text-sm text-violet-600 dark:text-violet-400 font-medium">
                    {lesson.points} points
                  </span>
                </div>
                <button
                  onClick={() => {
                    router.push(`/lessons/${lesson.id}`);
                    if (session?.user?.email) {
                      const newProgress = {
                        ...userProgress,
                        lastVisited: lesson.id,
                      };
                      saveProgress(newProgress);
                    }
                  }}
                  disabled={!canStart}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    canStart
                      ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-700 hover:to-violet-700 hover:scale-105"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {isCompleted ? "Review Lesson" : "Start Lesson"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
