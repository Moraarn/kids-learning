"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    // Ensure default is light mode
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/95 dark:bg-gray-800 dark:border-gray-700 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center px-4 lg:px-8">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="KinderDeutsch Logo"
            className="h-8 w-8 rounded"
          />
          <span className="text-xl font-bold text-blue-700 dark:text-white">
            KinderDeutsch
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex ml-auto items-center space-x-6">
          <Link
            href="/lessons"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
          >
            Lessons
          </Link>
          <Link
            href="/games"
            className="text-sm font-medium text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-500"
          >
            Games
          </Link>
          <Link
            href="/rewards"
            className="text-sm font-medium text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-500"
          >
            Rewards
          </Link>
          <Link
            href="/parents"
            className="text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-500"
          >
            Parents
          </Link>
          <Button
            className="text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            onClick={toggleTheme}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          className="md:hidden ml-auto text-black-600 dark:text-white"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-start px-4 py-4 space-y-4">
            <Link
              href="/lessons"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              Lessons
            </Link>
            <Link
              href="/games"
              className="text-sm font-medium text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-500"
              onClick={() => setMenuOpen(false)}
            >
              Games
            </Link>
            <Link
              href="/rewards"
              className="text-sm font-medium text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-500"
              onClick={() => setMenuOpen(false)}
            >
              Rewards
            </Link>
            <Link
              href="/parents"
              className="text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-500"
              onClick={() => setMenuOpen(false)}
            >
              Parents
            </Link>
            <Button
              className="w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
            >
              {darkMode ? (
                <div className="flex items-center space-x-2">
                  <Sun className="h-5 w-5" />
                  <span>Light Mode</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Moon className="h-5 w-5" />
                  <span>Dark Mode</span>
                </div>
              )}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
