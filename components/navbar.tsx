"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Languages, Menu, X } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center px-4 lg:px-8">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="KinderDeutsch Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-blue-700">KinderDeutsch</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex ml-auto items-center space-x-6">
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
        </div>

        {/* Mobile Menu Button */}
        <Button
          className="md:hidden ml-auto text-blue-600"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col items-start px-4 py-2 space-y-2">
            <Link
              href="/lessons"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
              onClick={() => setMenuOpen(false)}
            >
              Lessons
            </Link>
            <Link
              href="/games"
              className="text-sm font-medium text-green-600 hover:text-green-700"
              onClick={() => setMenuOpen(false)}
            >
              Games
            </Link>
            <Link
              href="/rewards"
              className="text-sm font-medium text-pink-600 hover:text-pink-700"
              onClick={() => setMenuOpen(false)}
            >
              Rewards
            </Link>
            <Link
              href="/parents"
              className="text-sm font-medium text-purple-600 hover:text-purple-700"
              onClick={() => setMenuOpen(false)}
            >
              Parents
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
