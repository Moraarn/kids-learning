"use client";

import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center px-4 lg:px-8">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="KinderDeutsch Logo" className="h-8 w-8" />
          <span className="hidden sm:block text-xl font-bold text-blue-700">KinderDeutsch</span>
        </Link>

        {/* Navigation Links */}
        <div className="ml-auto flex items-center">
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/lessons"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Lessons
            </Link>
            <Link
              href="/games"
              className="text-sm font-medium text-green-600 hover:text-green-700"
            >
              Games
            </Link>
            <Link
              href="/rewards"
              className="text-sm font-medium text-pink-600 hover:text-pink-700"
            >
              Rewards
            </Link>
            <Link
              href="/parents"
              className="text-sm font-medium text-purple-600 hover:text-purple-700"
            >
              Parents
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            className="md:hidden text-sm font-medium text-blue-600"
            aria-label="Open navigation menu"
          >
            <Languages className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
