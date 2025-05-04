import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="flex items-center justify-between px-6 py-4">
                <div className="flex-shrink-0">
                <Link href="/" className="pl-5 font-bold text-3xl">
                    Williams
                </Link>
                </div>
                <nav className="hidden md:flex gap-6 justify-center flex-1">
                    <Link href="/#about" className="text-gray-500 hover:text-black transition-transform duration-200 hover:scale-105">
                    About
                    </Link>
                    <Link href="/#experience" className="text-gray-500 hover:text-black transition-transform duration-200 hover:scale-105">
                    Experience
                    </Link>
                    <Link href="/#skills" className="text-gray-500 hover:text-black transition-transform duration-200 hover:scale-105">
                    Skills
                    </Link>
                    <Link href="/#projects" className="text-gray-500 hover:text-black transition-transform duration-200 hover:scale-105">
                    Projects
                    </Link>
                    <Link href="#contact" className="text-gray-500 hover:text-black transition-transform duration-200 hover:scale-105">
                    Contact
                    </Link>
                </nav>
            </div>
      </header>
    );
}