"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Star, Trophy, Medal } from "lucide-react";

export default function RewardsPage() {
  const achievements = [
    {
      title: "First Steps",
      description: "Complete your first lesson",
      progress: 100,
      icon: Star,
      color: "text-pink-600",
      bgColor: "bg-pink-100",
      borderColor: "border-pink-200",
    },
    {
      title: "Word Master",
      description: "Learn 50 German words",
      progress: 75,
      icon: Trophy,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-200",
    },
    {
      title: "Game Champion",
      description: "Win 10 learning games",
      progress: 40,
      icon: Medal,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-pink-700">Your Rewards</h1>
          <p className="text-xl text-pink-600">Track your achievements and earn badges!</p>
        </div>

        <div className="mb-8">
          <Card className="p-6 border-pink-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-pink-700">Total Points: 1,250</h2>
              <div className="flex items-center space-x-2">
                <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                <span className="text-lg font-medium text-gray-600">Level 5</span>
              </div>
            </div>
            <Progress value={75} className="h-2 bg-pink-100" />
            <p className="mt-2 text-sm text-pink-600">250 points until next level</p>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className={`overflow-hidden ${achievement.borderColor} hover:shadow-lg transition-shadow`}
            >
              <div className="p-6">
                <div className="mb-4 flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${achievement.bgColor}`}>
                    <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{achievement.title}</h3>
                </div>
                <p className="mb-4 text-gray-600">{achievement.description}</p>
                <Progress
                  value={achievement.progress}
                  className={`h-2 bg-gray-100 ${achievement.color.replace("text", "bg")}`}
                />
                <p className="mt-2 text-sm text-gray-500">{achievement.progress}% completed</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}