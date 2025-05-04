import { motion } from "framer-motion";
import { ProjectCard } from "./elements";
import { Project } from "./constants";

export default function ProjectSection() {
    return (
        <section id="projects" className="px-15 pt-10">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0.2 }}
                className="flex flex-col items-center pt-15 pb-10 bg-gray-50 will-change-transform"
            >
            <div className="text-center">
                <h1 className="font-bold text-3xl md:text-4xl pb-3">Projects</h1>
                <p className="text-xl md:text-2xl text-gray-500">Projects I've developed during my coursework and personal learning journey.</p>
            </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0.2 }}
                className=""
            >
            <div className="pt-5 grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch will-change-transform">
                {Project.map((item) => {
                    return (
                        <ProjectCard key={item.name} name={item.name} description={item.description} image={item.image} skill={item.skill} url={item.url}/>
                    );
                })}
            </div>
            </motion.div>
            
        </section>
    );
}