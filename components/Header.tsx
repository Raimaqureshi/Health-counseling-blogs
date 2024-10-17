import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gray-800 p-4 text-white">
      {/* Parent div for small and large screen handling */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {/* Navigation links */}
        <ul className="flex flex-col sm:flex-row gap-3 sm:gap-5 mb-3 sm:mb-0">
          <li>
            <Link className="hover:text-gray-300" href="/">Home</Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" href="/About">About</Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" href="/contact-us">Contact us</Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" href="/Career">Career</Link>
          </li>
        </ul>

        {/* Login and Signup links */}
        <ul className="flex flex-col sm:flex-row gap-3 sm:gap-5">
          <li>
            <Link className="hover:text-gray-300" href="/login">Login</Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" href="/signup">Signup</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
