"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Star } from "lucide-react";

export default function LessonsPage() {
  const lessons = [
    {
      title: "Greetings & Introduction",
      description: "Learn how to say hello and introduce yourself",
      level: "Beginner",
      duration: "15 min",
      points: 50,
    },
    {
      title: "Numbers 1-10",
      description: "Count your way through German numbers",
      level: "Beginner",
      duration: "20 min",
      points: 75,
    },
    {
      title: "Colors & Shapes",
      description: "Discover colors and shapes in German",
      level: "Beginner",
      duration: "25 min",
      points: 100,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-blue-700">German Lessons</h1>
          <p className="text-xl text-blue-600">Start your learning adventure!</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson, index) => (
            <Card key={index} className="overflow-hidden border-blue-200 hover:border-blue-300">
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-blue-700">{lesson.level}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{lesson.points} points</span>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-blue-700">{lesson.title}</h3>
                <p className="mb-4 text-blue-600">{lesson.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{lesson.duration}</span>
                  <Button className="bg-blue-500 hover:bg-blue-600">Start Lesson</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}