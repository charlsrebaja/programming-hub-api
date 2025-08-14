export interface CodeSnippet {
  language: string;
  code: string;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  category: "web" | "python" | "javascript" | "general";
  order: number;
  videoUrl?: string;
  content: string;
  codeSnippets: CodeSnippet[];
  prerequisites?: string[];
  estimatedTime: string;
  points: number;
}

export const lessons: Lesson[] = [
  {
    id: "intro-to-programming",
    title: "Introduction to Programming",
    description: "Learn the basics of programming logic and problem-solving.",
    level: "beginner",
    category: "general",
    order: 1,
    videoUrl: "https://www.youtube.com/embed/zOjov-2OZ0E",
    content: `
# Introduction to Programming

Programming is the art of instructing computers to perform specific tasks. In this lesson, we'll explore fundamental concepts that form the building blocks of programming.

## Key Concepts

1. **Variables and Data Types**
   - Think of variables as containers that store information
   - Different types of data: numbers, text (strings), true/false (boolean)

2. **Control Flow**
   - Making decisions in code (if/else statements)
   - Repeating actions (loops)

3. **Functions**
   - Reusable blocks of code
   - Input → Processing → Output

## Why Programming?

Programming allows you to:
- Solve complex problems
- Automate repetitive tasks
- Create useful applications
- Express creativity through code
    `,
    codeSnippets: [
      {
        language: "python",
        code: '# Example of variables and data types\nname = "John"  # string\nage = 25      # number\nis_student = True  # boolean\n\n# Using an if statement\nif age >= 18:\n    print(f"{name} is an adult")\nelse:\n    print(f"{name} is a minor")',
        explanation:
          "This code demonstrates basic variable usage and a simple if/else statement in Python. We store different types of data and make a decision based on the age variable.",
      },
      {
        language: "javascript",
        code: '// Example of a simple function\nfunction greetUser(name) {\n  return `Hello, ${name}! Welcome to programming.`;\n}\n\n// Using the function\nconst greeting = greetUser("Alice");\nconsole.log(greeting);',
        explanation:
          "This example shows how to create and use a function in JavaScript. The function takes a name parameter and returns a personalized greeting.",
      },
    ],
    prerequisites: [],
    estimatedTime: "45 minutes",
    points: 100,
  },
  {
    id: "web-development-basics",
    title: "Web Development Basics",
    description: "Discover HTML, CSS, and JavaScript fundamentals.",
    level: "beginner",
    category: "web",
    order: 2,
    videoUrl: "https://www.youtube.com/embed/ysEN5RaKOlA",
    content: `
# Web Development Fundamentals

Learn the core technologies that power the web: HTML, CSS, and JavaScript.

## HTML - Structure
HTML (HyperText Markup Language) provides the structure of web pages.

## CSS - Style
CSS (Cascading Style Sheets) controls the visual appearance of HTML elements.

## JavaScript - Interactivity
JavaScript adds interactivity and dynamic behavior to web pages.
    `,
    codeSnippets: [
      {
        language: "html",
        code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Webpage</title>\n</head>\n<body>\n  <h1>Welcome!</h1>\n  <p>This is a paragraph.</p>\n</body>\n</html>",
        explanation:
          "This is a basic HTML structure that every webpage needs. It includes a head section for metadata and a body section for visible content.",
      },
      {
        language: "css",
        code: "/* Basic CSS styling */\nh1 {\n  color: blue;\n  font-size: 24px;\n}\n\np {\n  color: #333;\n  line-height: 1.5;\n}",
        explanation:
          "This CSS code styles our h1 heading and paragraph text. It changes colors and adjusts text properties for better readability.",
      },
    ],
    prerequisites: ["intro-to-programming"],
    estimatedTime: "60 minutes",
    points: 150,
  },
  {
    id: "python-beginners",
    title: "Python for Beginners",
    description: "Start your journey with Python programming.",
    level: "beginner",
    category: "python",
    order: 3,
    videoUrl: "https://www.youtube.com/embed/x7X9w_GIm1s",
    content: `
# Python Programming Basics

Python is a versatile, beginner-friendly programming language used in web development, data science, AI, and more.

## Why Python?
- Clean, readable syntax
- Extensive library support
- Great for beginners
- Powerful for professionals

## Key Features
1. Dynamic typing
2. Extensive standard library
3. Large community
4. Cross-platform compatibility
    `,
    codeSnippets: [
      {
        language: "python",
        code: '# Basic Python syntax\n\n# Variables and data types\nname = "Alice"\nage = 25\nheight = 1.75\n\n# Lists\nfavorite_colors = ["blue", "green", "purple"]\n\n# For loop\nfor color in favorite_colors:\n    print(f"{name} likes {color}")',
        explanation:
          "This code shows Python's syntax for variables, lists, and loops. Notice how Python uses indentation to define code blocks.",
      },
      {
        language: "python",
        code: '# Functions in Python\ndef calculate_area(length, width):\n    return length * width\n\n# Using the function\nroom_area = calculate_area(5, 4)\nprint(f"The room area is {room_area} square meters")',
        explanation:
          "Here we define a function that calculates area. Python functions are defined using 'def' and can return values using 'return'.",
      },
    ],
    prerequisites: ["intro-to-programming"],
    estimatedTime: "50 minutes",
    points: 125,
  },
];
