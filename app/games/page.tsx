"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gamepad2, Star } from "lucide-react";

export default function GamesPage() {
  const games = [
    {
      title: "Word Match",
      description: "Match German words with their meanings",
      difficulty: "Easy",
      players: "1 Player",
      points: 100,
    },
    {
      title: "Memory Cards",
      description: "Find matching pairs of German words",
      difficulty: "Medium",
      players: "1-2 Players",
      points: 150,
    },
    {
      title: "Speed Words",
      description: "Type German words as fast as you can",
      difficulty: "Hard",
      players: "1 Player",
      points: 200,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-green-700">Learning Games</h1>
          <p className="text-xl text-green-600">Learn German through fun games!</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game, index) => (
            <Card key={index} className="overflow-hidden border-green-200 hover:border-green-300">
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Gamepad2 className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-green-700">{game.difficulty}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{game.points} points</span>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-green-700">{game.title}</h3>
                <p className="mb-4 text-green-600">{game.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{game.players}</span>
                  <Button className="bg-green-500 hover:bg-green-600">Play Now</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}