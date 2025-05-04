'use client';
import Link from 'next/link';

interface ButtonProps {
  link: string;
  text: string;
  className?: string
}


export default function Button({ link, text, className = "" }: Readonly<ButtonProps>) {
    return (
        <Link href={link}>
            <div className={`inline-block px-5 py-3 rounded-lg transition duration-250 ${className} border border-black`}>
                {text}
            </div>
        </Link>
    );
}