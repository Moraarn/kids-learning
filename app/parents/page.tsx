"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, LineChart, Shield, Users } from "lucide-react";

export default function ParentsPage() {
  const features = [
    {
      title: "Progress Tracking",
      description: "Monitor your child's learning journey with detailed progress reports",
      icon: LineChart,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Safe Learning Environment",
      description: "Secure platform with parental controls and age-appropriate content",
      icon: Shield,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Curriculum Overview",
      description: "Access detailed information about lessons and learning objectives",
      icon: BookOpen,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Community Support",
      description: "Connect with other parents and share experiences",
      icon: Users,
      color: "text-pink-600",
      bgColor: "bg-pink-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-purple-700">Parents Guide</h1>
          <p className="mx-auto max-w-2xl text-xl text-purple-600">
            Help your child succeed in their German learning journey with our comprehensive tools and resources.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden border-purple-200 hover:border-purple-300">
              <div className="p-6">
                <div className="mb-4 flex items-center space-x-3">
                  <div className={`rounded-full p-3 ${feature.bgColor}`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                </div>
                <p className="mb-4 text-gray-600">{feature.description}</p>
                <Button className="w-full bg-purple-500 hover:bg-purple-600">Learn More</Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card className="border-purple-200 p-8">
            <div className="text-center">
              <h2 className="mb-4 text-2xl font-bold text-purple-700">Get Started Today</h2>
              <p className="mb-6 text-purple-600">
                Create a parent account to access all monitoring and control features
              </p>
              <Button className="bg-purple-500 hover:bg-purple-600">
                Create Parent Account
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}