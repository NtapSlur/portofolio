import { motion } from "framer-motion";
import { SkillConstant } from "./constants";
import { SkillCard } from "./elements";
export default function SkillSection() {
    return (
        <div>
            <section id="skills" className="px-15 pt-10">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ amount: 0.2 }}
                    className="flex flex-col items-center pt-15 pb-10 bg-gray-50 will-change-transform"
                >
                <div className="text-center">
                    <h1 className="font-bold text-3xl md:text-4xl pb-3">Skills & Tech</h1>
                    <p className="text-xl md:text-2xl text-gray-500">Skills and technologies acquired through academic coursework and hands-on experience in personal projects</p>
                </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ amount: 0.2 }}
                    className=""
                >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch will-change-transform">
                    {SkillConstant.map((item) => {
                        return (
                            <SkillCard key={item.category} category={item.category} skill={item.skill} />
                        );
                    })}
                </div>
                </motion.div>
                
            </section>
        </div>
    );
}