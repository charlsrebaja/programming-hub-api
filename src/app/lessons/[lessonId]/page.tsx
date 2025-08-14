import { lessons } from "@/data/lessons";
import { notFound } from "next/navigation";
import LessonContent from "./LessonContent";

interface PageProps {
  params: { lessonId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function LessonPage({ params }: PageProps) {
  const lesson = lessons.find((l) => l.id === params.lessonId);

  if (!lesson) {
    notFound();
  }

  return <LessonContent lesson={lesson} />;
}
