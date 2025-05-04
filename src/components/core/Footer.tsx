'use client';

import { Github, Linkedin, Mail, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="px-8 py-8 border-t border-gray-200 mt-10 bg-gray-50">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-8xl mx-auto text-m text-gray-400">
                <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} Williams. All rights reserved.</p>
                <div className="flex gap-4">
                    <Link href="https://github.com/NtapSlur" target="_blank" aria-label="GitHub">
                        <Github className="hover:text-black transition duration-300" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/williams-baa0a2248/" target="_blank" aria-label="LinkedIn">
                        <Linkedin className="hover:text-blue-600 transition duration-300" />
                    </Link>
                    <Link href="mailto:williamsusanto82@gmail.com" aria-label="Email">
                        <Mail className="hover:text-red-600 transition duration-300" />
                    </Link>
                    <Link href="https://medium.com/@williamsusanto82" target="_blank" aria-label="Medium">
                        <BookOpen className="hover:text-black transition duration-300" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}