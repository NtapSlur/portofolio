'use client';
import Link from 'next/link';

interface ProjectButtonProps {
  link: string;
  text: string;
}


export default function ProjectButton({ link, text }: Readonly<ProjectButtonProps>) {
    return (
        <Link href={link} target='_blank'>
            <div className={`inline-block px-3 py-2 text-sm rounded-lg transition duration-250 bg-black text-white hover:bg-white hover:text-black border border-black`}>
                {text}
            </div>
        </Link>
    );
}