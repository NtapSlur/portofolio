'use client';

import { Button } from "@/components/core";
import { motion } from "framer-motion";
import { ExperienceCard } from "./elements"
import { ExperienceFeedConstant } from "./constants";
import React from "react";

export default function ExperienceSection() {
    return (
        <section id="experience" className="px-15 pt-15">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0 }}
                className="flex flex-col items-center pt-15 pb-10 bg-gray-50 will-change-transform"
            >
            <div className="text-center">
                <h1 className="font-bold text-3xl md:text-4xl pb-3">Experience</h1>
                <p className="text-xl md:text-2xl text-gray-500">My experiences in academic and organization</p>
            </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0.2 }}
                className="pt-5 will-change-transform"
            >
            <div className="">
                <div className="flex flex-col items-stretch md:flex-row gap-5">
                    {ExperienceFeedConstant.slice(0, 4).map((item) => {
                    return (
                    <ExperienceCard key={item.title} title={item.title} description={item.description} organization={item.organization} date={item.date} skill={item.skill ?? []}/>
                    );
                    })}
                </div>
            </div>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.2 }}
                className="py-10 flex flex-col items-center will-change-transform"
            >
                <Button link="/experiences" text="View More" className="bg-black text-white hover:bg-white hover:text-black"/>
            </motion.div>
            
        </section>
    );
}