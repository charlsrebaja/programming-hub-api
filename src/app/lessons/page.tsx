"use client";

import { lessons } from "@/data/lessons";
import { useRouter } from "next/navigation";

export default function LessonsPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Your Coding Lessons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">{lesson.title}</h2>
            <p className="text-gray-600 mb-4">{lesson.description}</p>
            <button
              onClick={() => router.push(`/lessons/${lesson.id}`)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded"
            >
              Start Lesson
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
