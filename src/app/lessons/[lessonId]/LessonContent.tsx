"use client";

import type { Lesson } from "@/data/lessons";

export default function LessonContent({ lesson }: { lesson: Lesson }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{lesson.title}</h1>
      <p className="text-gray-600 mb-8">{lesson.description}</p>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Lesson Content</h2>
        <p className="text-gray-600 dark:text-gray-300">
          This is where the lesson content will be displayed. We can expand this
          later with:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600 dark:text-gray-300">
          <li>Interactive code examples</li>
          <li>Video tutorials</li>
          <li>Practice exercises</li>
          <li>Progress tracking</li>
        </ul>
      </div>
    </div>
  );
}
