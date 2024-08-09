"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import the usePathname hook

function NavBar({ params }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path
  const lang = params.lang || "en"; // Default to 'en' if lang is not provided

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // Adjust the scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => pathname === `/${lang}${href}`; // Adjusted to include lang
  const activeClass = "text-teal-600 font-bold border-b-2 border-teal-600 pb-1";

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div
        className={`mx-auto flex max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
          isScrolled ? "h-16" : "h-16 lg:h-28"
        }`}
      >
        <Link
          className="block font-bold text-2xl text-teal-600"
          href={`/${lang}/`}
        >
          SriBuzz
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className={`text-gray-500 transition hover:text-gray-500/75 ${
                    isActive("/local") ? activeClass : ""
                  }`}
                  href={`/${lang}/local`}
                >
                  Local
                </Link>
              </li>

              <li>
                <Link
                  className={`text-gray-500 transition hover:text-gray-500/75 ${
                    isActive("/world") ? activeClass : ""
                  }`}
                  href={`/${lang}/world`}
                >
                  World
                </Link>
              </li>

              <li>
                <Link
                  className={`text-gray-500 transition hover:text-gray-500/75 ${
                    isActive("/political") ? activeClass : ""
                  }`}
                  href={`/${lang}/political`}
                >
                  Political
                </Link>
              </li>

              <li>
                <Link
                  className={`text-gray-500 transition hover:text-gray-500/75 ${
                    isActive("/sports") ? activeClass : ""
                  }`}
                  href={`/${lang}/sports`}
                >
                  Sports
                </Link>
              </li>

              <li>
                <Link
                  className={`text-gray-500 transition hover:text-gray-500/75 ${
                    isActive("/entertainment") ? activeClass : ""
                  }`}
                  href={`/${lang}/entertainment`}
                >
                  Entertainment
                </Link>
              </li>

              <li>
                <Link
                  className={`text-gray-500 transition hover:text-gray-500/75 ${
                    isActive("/contact") ? activeClass : ""
                  }`}
                  href={`/${lang}/contact`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/si">සිංහල</Link> | <Link href="/en">English</Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                href="#"
              >
                Login
              </a>

              <a
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                href="#"
              >
                Register
              </a>
            </div>

            <button
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Off-canvas menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav aria-label="Global" className="mt-16 px-6">
            <ul className="flex flex-col gap-6 text-sm">
              <li>
                <Link
                  className={`text-gray-500 transition hover:text-gray-500/75 ${
                    isActive("/local") ? activeClass : ""
                  }`}
                  href={`/${lang}/local`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Local
                </Link>
              </li>

              <li>
                <Link
                  className={`text-gray-500 transition hover:text-gray-500/75 ${
                    isActive("/world") ? activeClass : ""
                  }`}
                  href={`/${lang}/world`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  World
                </Link>
              </li>

              <li>
                <Link
                  className={`text-gray-500 transition hover:text-gray-500/75 ${
                    isActive("/political") ? activeClass : ""
                  }`}
                  href={`/${lang}/political`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Political
                </Link>
              </li>

              <li>
                <Link
                  className={`text-gray-500 transition hover:text-gray-500/75 ${
                    isActive("/sports") ? activeClass : ""
                  }`}
                  href={`/${lang}/sports`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sports
                </Link>
              </li>

              <li>
                <Link
                  className={`text-gray-500 transition hover:text-gray-500/75 ${
                    isActive("/entertainment") ? activeClass : ""
                  }`}
                  href={`/${lang}/entertainment`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Entertainment
                </Link>
              </li>

              <li>
                <Link
                  className={`text-gray-500 transition hover:text-gray-500/75 ${
                    isActive("/contact") ? activeClass : ""
                  }`}
                  href={`/${lang}/contact`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
