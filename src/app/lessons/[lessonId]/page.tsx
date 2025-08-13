import { lessons } from "@/data/lessons";
import { notFound } from "next/navigation";
import LessonContent from "./LessonContent";

export default async function LessonPage({
  params,
}: {
  params: { lessonId: string };
}) {
  const lesson = lessons.find((l) => l.id === params.lessonId);

  if (!lesson) {
    notFound();
  }

  return <LessonContent lesson={lesson} />;
}
