"use client";

import { lessons } from "@/data/lessons";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LessonsPage() {
  const router = useRouter();
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Lessons" },
    { id: "general", name: "Programming Fundamentals" },
    { id: "web", name: "Web Development" },
    { id: "python", name: "Python" },
    { id: "javascript", name: "JavaScript" },
  ];

  const filteredLessons = lessons.filter(
    (lesson) => selectedCategory === "all" || lesson.category === selectedCategory
  );

  const totalPoints = completedLessons.reduce((acc, lessonId) => {
    const lesson = lessons.find((l) => l.id === lessonId);
    return acc + (lesson?.points || 0);
  }, 0);

  const progressPercentage = (completedLessons.length / lessons.length) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
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
              <p className="text-2xl font-bold text-blue-600">{completedLessons.length}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Lessons Completed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-violet-600">{totalPoints}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Points</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
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
              {isCompleted && (
                <div className="absolute top-4 right-4 text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  {lesson.level}
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400">
                  {lesson.estimatedTime}
                </span>
              </div>
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {lesson.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {lesson.description}
              </p>
              {prerequisites.length > 0 && !canStart && (
                <p className="text-sm text-amber-600 dark:text-amber-400 mb-4">
                  Complete previous lessons to unlock
                </p>
              )}
              <div className="flex justify-between items-center">
                <span className="text-sm text-violet-600 dark:text-violet-400 font-medium">
                  {lesson.points} points
                </span>
                <button
                  onClick={() => router.push(`/lessons/${lesson.id}`)}
                  disabled={!canStart}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    canStart
                      ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-700 hover:to-violet-700"
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
