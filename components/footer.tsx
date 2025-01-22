import { Languages } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t ">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2">
              <Languages className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-blue-700">KinderDeutsch</span>
            </div>
            <p className="mt-4 text-sm text-blue-600">
              Making German learning fun and engaging for kids around the world.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-blue-700">Learning</h3>
            <ul className="space-y-3 text-sm text-blue-600">
              <li>
                <Link href="/lessons" className="hover:text-blue-700">
                  Lessons
                </Link>
              </li>
              <li>
                <Link href="/games" className="hover:text-blue-700">
                  Games
                </Link>
              </li>
              <li>
                <Link href="/vocabulary" className="hover:text-blue-700">
                  Vocabulary
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-blue-700">Resources</h3>
            <ul className="space-y-3 text-sm text-blue-600">
              <li>
                <Link href="/parents" className="hover:text-blue-700">
                  Parents Guide
                </Link>
              </li>
              <li>
                <Link href="/progress" className="hover:text-blue-700">
                  Track Progress
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-blue-700">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-blue-700">Legal</h3>
            <ul className="space-y-3 text-sm text-blue-600">
              <li>
                <Link href="/privacy" className="hover:text-blue-700">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-700">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-700">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-blue-100 pt-8 text-center text-sm text-blue-600">
          <p>© {new Date().getFullYear()} KinderDeutsch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}