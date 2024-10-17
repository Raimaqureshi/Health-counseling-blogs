import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div>
   
    <h1 >My name is Raima and i am currently learning web app developement.</h1>
    
 {/* Yaha tum nested route ka link de sakti ho */}
 <ul className="flex gap-5 bg-gray-800 p-2 text-white hover:text-gray-300">
                <li>
                    <Link className="hover:text-gray-300" href="/About/nestedroutes">Go to Nested Route</Link>
                </li>
            </ul>

    </div>
  );
}
