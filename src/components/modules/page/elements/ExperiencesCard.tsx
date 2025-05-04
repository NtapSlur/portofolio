import { Badge } from "@/components/core";
import { motion } from "framer-motion"
import { Calendar } from "lucide-react";

interface ExperienceProp {
    title: string,
    organization: string,
    description: string,
    date: string,
    skill: Array<string>
}

export default function ExperiencesCard( { title, organization, description, date, skill }: Readonly<ExperienceProp> ) {
    return (
        <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
        className="px-5 my-5 border border-gray-300 border-l-4 border-l-gray-800 rounded-2xl will-change-transform">
            <div className="flex justify-between">
                <h1 className="text-xl py-3">{title}</h1>
                <div className="flex flex-row gap-3 py-3">
                    <Calendar className="h-4 w-4 text-gray-500"></Calendar>
                    <span className="text-sm text-gray-500">{date}</span>
                </div>
            </div>
            <div className="">
                <h1 className="text-lg">{organization}</h1>
                <p className="py-2 text-black font-medium text-sm">
                {description
                .trim()
                .split('\n')
                .map((line) => (
                    <span key={line}>
                    {line}
                    <br />
                    </span>
                ))}
                </p>
            </div>

            <div className="flex flex-wrap gap-2 pb-5">
                {skill.map((item) => {
                    return (
                        <Badge key={item} text={item} custom="bg-gray-100 border-gray-100"/>
                    );
                })}
            </div>
        </motion.div>
    );

}