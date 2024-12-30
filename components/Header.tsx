import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-lime-200  ">
      <div className="flex justify-between items-center">
        <div className="ml-4">
          <Image
            src="/images/Health3.png"
            alt="Health Counseling Hub Logo"
            width={150}
            height={50}
            className="object-contain"
            priority 
          />
        </div>
        <ul className="flex gap-2 sm:gap-3 md:gap-7 lg:gap-5 xl:gap-8 text-sm sm:text-base md:text-lg lg:text-xl mr-4">
          <li>
            <Link className="text-green-700 " href="/">Home</Link>
          </li>
          <li>
            <Link className="text-green-700" href="/About">About</Link>
          </li>
          <li>
            <Link className="text-green-700" href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link className="text-green-700" href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
