// components/Footer.tsx
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-lime-200 text-white py-8 ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-6 justify-between">
          <div>
            <h3 className="text-lime-700 text-xl font-semibold">Quick Access</h3>
            <ul className="mt-4">
              <li>
                <Link
                  href="/"
                  className="text-lime-700 hover:text-lime-800"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/About"
                  className="text-lime-700 hover:text-lime-800"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-lime-700 hover:text-lime-800"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-lime-700 hover:text-lime-800"
                >
                  Contact
                </Link>
                </li>
                <li>
                <Link
                  href="/faq"
                  className="text-lime-700 hover:text-lime-800"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lime-700 text-xl font-semibold">Follow Us</h3>
            <ul className="mt-4">
              <li>
                <Link
                  href="https://twitter.com"
                  className="text-lime-700 hover:text-lime-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://facebook.com"
                  className="text-lime-700 hover:text-lime-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  className="text-lime-700 hover:text-lime-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center bg-lime-900 py-2">
        <p>
          &copy; {new Date().getFullYear()} Wellness Tips. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
