# Build a modern, responsive landing page for "Interactive Programming Hub" using Next.js, Tailwind CSS, and shadcn/ui.

Theme & Style:

Minimal yet vibrant, with a programming / tech-inspired aesthetic.

Use gradients, subtle animations, and clean typography.

Keep a consistent spacing and padding for a balanced layout.

Sections to Include:

# Navigation

Left: Project logo or name

Right: "Sign in with Google" button (styled with shadcn/ui Button)

Sticky on scroll

# Hero Section

Full-width background (gradient or abstract code illustration)

Headline: “Learn, Create, and Explore through Code”

Subheadline: “Hands-on lessons for future programmers.”

Large CTA button: "Sign in with Google" → links to /api/auth

Optional: small animation or coding-themed illustration

Features Section

# Three feature cards using shadcn/ui Card component

Features: 💻 Learn by Doing, 🤝 Collaborate, 📊 Track Progress

# How It Works Section

Three-step layout:
Step 1: Sign in with Google
Step 2: Access Lessons & Activities
Step 3: Track Your Progress & Achievements

# Footer

Links: About, Contact, Privacy Policy

Small copyright

Behavior:

If the user is already logged in (JWT or session available), automatically redirect to /home or page.tsx.

Once logged in, the user can access lessons and track their progress directly.

The “Sign in with Google” button should call the backend Google OAuth route.

Fully responsive for desktop, tablet, and mobile.

UI Library Usage:

Use shadcn/ui for buttons, cards, and responsive layouts.

Tailwind for utility classes & custom styles.