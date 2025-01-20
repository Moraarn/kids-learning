"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Star, Trophy, Gamepad2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-100 to-purple-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-blue-600">
              Learn German with Fun! 🎈
            </h1>
            <p className="mb-8 text-xl text-blue-700">
              The most enjoyable way for kids to learn German
            </p>
            <Button className="bg-secondary hover:bg-secondary/90 text-lg">
              Start Learning Now
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6 transition-transform hover:scale-105 border-blue-200 hover:border-blue-300">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-blue-700">
                Interactive Lessons
              </h3>
              <p className="text-blue-600">
                Fun and engaging lessons designed for young learners
              </p>
            </Card>

            <Card className="p-6 transition-transform hover:scale-105 border-green-200 hover:border-green-300">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <Gamepad2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-green-700">
                Learning Games
              </h3>
              <p className="text-green-600">
                Play exciting games while learning German
              </p>
            </Card>

            <Card className="p-6 transition-transform hover:scale-105 border-pink-200 hover:border-pink-300">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                <Star className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-pink-700">
                Rewards System
              </h3>
              <p className="text-pink-600">
                Earn stars and badges as you learn
              </p>
            </Card>

            <Card className="p-6 transition-transform hover:scale-105 border-purple-200 hover:border-purple-300">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <Trophy className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-purple-700">
                Progress Tracking
              </h3>
              <p className="text-purple-600">Watch your German skills grow</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-blue-600">
            Start Your German Adventure! 🚀
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="overflow-hidden border-blue-200 hover:border-blue-300">
              <div className="aspect-video w-full bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2069')] bg-cover bg-center" />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-blue-700">
                  Beginner Path
                </h3>
                <p className="mb-4 text-blue-600">
                  Perfect for kids just starting their German journey
                </p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                  Start Here
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden border-green-200 hover:border-green-300">
              <div className="aspect-video w-full bg-[url('https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=2072')] bg-cover bg-center" />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-green-700">
                  Intermediate Fun
                </h3>
                <p className="mb-4 text-green-600">
                  Level up your German with exciting challenges
                </p>
                <Button className="w-full bg-green-500 hover:bg-green-600">
                  Continue Learning
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden border-purple-200 hover:border-purple-300">
              <div className="aspect-video w-full bg-[url('https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=2070')] bg-cover bg-center" />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-purple-700">
                  Advanced Explorer
                </h3>
                <p className="mb-4 text-purple-600">
                  Master German through immersive activities
                </p>
                <Button className="w-full bg-purple-500 hover:bg-purple-600">
                  Explore More
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-blue-600">
            Ready to Start Learning German? 🎉
          </h2>
          <p className="mb-8 text-xl text-blue-700">
            Join thousands of happy kids learning German the fun way!
          </p>
          <Button className="bg-secondary hover:bg-secondary/90 text-lg">
            Get Started for Free
          </Button>
        </div>
      </section>

      {/* Contact Teacher Grace Awiti */}
      <section className="py-20 bg-gradient-to-b from-pink-100 to-purple-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-purple-700">
            Kontaktieren Sie Lehrerin Grace Awiti
          </h2>
          <p className="mb-4 text-lg text-purple-600">
            Haben Sie Fragen? Kontaktieren Sie Grace Awiti für weitere
            Informationen!
          </p>
          <Link
            href="mailto:grace.awiti@example.com?subject=German Learning Inquiry"
            className="text-lg font-semibold text-blue-600 hover:underline"
          >
            Email: grace.awiti@example.com
          </Link>
          <p className="mt-2 text-lg text-purple-600">
            Telefonnummer:{" "}
            <a href="tel:+1234567890" className="text-blue-600 hover:underline">
              +254 794 347 487
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
