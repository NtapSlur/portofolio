'use client';

import { ExperiencesCard } from "./elements";
import { Navbar, Footer } from "@/components/core";
import { motion } from "framer-motion";
import { AcademicExperienceConstant, OrganizationExperienceConstant } from "../sections/experience/constants"; 

export default function ExperiencesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0}} 
                className="flex flex-col items-center pt-15 pb-10 bg-gray-50 will-change-transform"
            >
            <div className="text-center">
                <h1 className="font-bold text-3xl md:text-4xl pb-3">Experience</h1>
                <p className="text-xl md:text-2xl text-gray-500">My experiences in academic and organization</p>
            </div>
            </motion.div>

            <div className="px-15 pt-15 text-xl md:text-2xl font-bold">
                <motion.div
                    initial={{ opacity:0, x:-100 }}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ amount: 0.2 }} 
                >
                    <h1>Academic Experience</h1>
                </motion.div>
                
                {AcademicExperienceConstant.map((item) => {
                    return (
                        <ExperiencesCard key={item.title} title={item.title} date={item.date} organization={item.organization} description={item.description} skill={item.skill}/>
                    );
                })}
            </div>

            <div className="px-15 pt-15 text-xl md:text-2xl font-bold">
                <motion.div
                    initial={{ opacity:0, x:-100 }}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ amount: 0.2 }} 
                >
                    <h1>Organization Experience</h1>
                </motion.div>

                {OrganizationExperienceConstant.map((item) => {
                    return (
                        <ExperiencesCard key={item.title} title={item.title} date={item.date} organization={item.organization} description={item.description} skill={item.skill}/>
                    );
                })}
            </div>
            <Footer />
        </div>
    );
}