"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/core";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation"; 

export default function AboutSection() {
    return (
        <section id="about" className="px-15">
            <div className="pt-5 md:py-10"></div>
            <div className="flex flex-col md:flex-row items-center justify-between">
                <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ amount: 0.2 }}
                    className="md:w-1/2 md:pb-10 will-change-transform"
                >
                <div>
                    <TypeAnimation
                    sequence={[
                        "Hi, I'm Williams 👋",
                        2000,
                        "",
                    ]}
                    speed={50}
                    wrapper="h1"
                    className="text-4xl md:text-6xl font-bold py-5"
                    repeat={Infinity}
                    />

                    <p className="text-2xl md:text-3xl text-gray-500 max-w-l">
                        Computer Science Student & Aspiring Software Engineer
                    </p>

                    <p className="py-5 text-l md:text-xl text-gray-500 max-w-l">
                        I am an undergraduate CS student passionate 
                        about <span className="font-bold">web development</span>, <span className="font-bold">software engineering</span>,
                        and <span className="font-bold">cybersecurity</span>. Currently focusing on building accessible and user-friendly web
                        applications with modern technologies. Outside of coding, I enjoy writing the 
                        occasional <Link href="https://medium.com/@williamsusanto82" target="_blank" className="underline hover:text-blue-500">technical blog</Link> post 
                        to share what I have learned and contribute to the developer community.
                    </p>
                </div>
                <div className="flex flex-row gap-8">
                    <Button link="https://github.com/NtapSlur" text="View My GitHub" className="bg-black text-white hover:bg-white hover:text-black"/>
                    <Link href="https://drive.google.com/file/d/1U66dGZBe1d5nxia4jXSPY3cFWaBXl7lD/view?usp=sharing" target="_blank">
                        <div className="inline-block px-5 py-3 rounded-lg transition duration-250 border border-black bg-white text-black hover:bg-gray-100">
                            <div className="flex flex-row gap-3">
                                <ExternalLink></ExternalLink>
                                <p>Resume</p>
                            </div>
                        </div>
                    </Link>
                </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ amount: 0 }}
                    className="pt-20 py-10 md:py-20 md:w-1/2 flex justify-center will-change-transform"
                >
                <div>
                    <div className="relative w-72 h-72 md:w-96 md:h-96">

                        <div className="absolute -z-10 w-full h-full bg-primary/10 -rotate-6 rounded-3xl -top-4 -left-4 bg-gray-300"></div>
                        <div className="absolute -z-10 w-full h-full bg-primary/20 rotate-6 rounded-3xl -bottom-4 -right-4 bg-gray-200"></div>

                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 bg-background z-10">
                            <Image
                                src="/images/Profile.jpg"
                                alt="Profile Picture"
                                fill
                                className="object-cover object-[center_10%]"
                                priority
                            />
                        </div>
                        </div>
                    </div>
                    </motion.div>
            </div>
        </section>
    );
}