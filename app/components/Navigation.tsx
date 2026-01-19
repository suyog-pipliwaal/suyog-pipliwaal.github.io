"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 border-b border-black dark:border-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="text-lg sm:text-xl font-bold text-black dark:text-white hover:opacity-70 transition-opacity"
            onClick={closeMenu}
          >
            Suyog Pipliwal
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <Link href="/" className="text-black dark:text-white hover:opacity-70 transition-opacity">
              Home
            </Link>
            <Link href="/education" className="text-black dark:text-white hover:opacity-70 transition-opacity">
              Education
            </Link>
            <Link href="/experience" className="text-black dark:text-white hover:opacity-70 transition-opacity">
              Experience
            </Link>
            <Link href="/projects" className="text-black dark:text-white hover:opacity-70 transition-opacity">
              Projects
            </Link>
            <Link href="/opensource" className="text-black dark:text-white hover:opacity-70 transition-opacity">
              Open source Contribution
            </Link>
            <Link href="/cv" className="text-black dark:text-white hover:opacity-70 transition-opacity">
              CV
            </Link>
            <Link href="/publications" className="text-black dark:text-white hover:opacity-70 transition-opacity">
              Publications
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-black dark:text-white hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-black dark:border-white pt-4">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-black dark:text-white hover:opacity-70 transition-opacity py-2"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                href="/education" 
                className="text-black dark:text-white hover:opacity-70 transition-opacity py-2"
                onClick={closeMenu}
              >
                Education
              </Link>
              <Link 
                href="/experience" 
                className="text-black dark:text-white hover:opacity-70 transition-opacity py-2"
                onClick={closeMenu}
              >
                Experience
              </Link>
              <Link 
                href="/projects" 
                className="text-black dark:text-white hover:opacity-70 transition-opacity py-2"
                onClick={closeMenu}
              >
                Projects
              </Link>
              <Link 
                href="/opensource" 
                className="text-black dark:text-white hover:opacity-70 transition-opacity py-2"
                onClick={closeMenu}
              >
                Open source Contribution
              </Link>
              <Link 
                href="/cv" 
                className="text-black dark:text-white hover:opacity-70 transition-opacity py-2"
                onClick={closeMenu}
              >
                CV
              </Link>
              <Link 
                href="/publications" 
                className="text-black dark:text-white hover:opacity-70 transition-opacity py-2"
                onClick={closeMenu}
              >
                Publications
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
