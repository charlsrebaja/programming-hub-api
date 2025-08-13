export interface Lesson {
  id: string;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
}

export const lessons: Lesson[] = [
  {
    id: "intro-to-programming",
    title: "Introduction to Programming",
    description: "Learn the basics of programming logic and problem-solving.",
    level: "beginner",
  },
  {
    id: "web-development-basics",
    title: "Web Development Basics",
    description: "Discover HTML, CSS, and JavaScript fundamentals.",
    level: "beginner",
  },
  {
    id: "python-beginners",
    title: "Python for Beginners",
    description: "Start your journey with Python programming.",
    level: "beginner",
  },
];
