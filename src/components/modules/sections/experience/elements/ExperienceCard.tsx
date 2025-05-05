import { Calendar } from "lucide-react";
import { Badge } from "@/components/core";

interface ExperienceCardProps {
    title: string;
    organization: string;
    description: string;
    date: string;
    skill: Array<string>;
}

export default function ExperienceCard({ title, organization, description, date, skill }: Readonly<ExperienceCardProps>) {

    return (
        <div className="bg-white rounded-2xl shadow-md p-5 w-auto md:w-md h-full hover:shadow-lg transition duration-300 hover:scale-102 justify-between">
            <h2 className="text-xl mb-2 line-clamp-2 h-[56px] font-semibold">{title}</h2>
            <div className="border border-gray-400"></div>
            <h3 className="text-md my-3 h-10 text-gray-600 italic">{organization}</h3>
            <p className="my-3 text-gray-700 h-[72px] overflow-hidden line-clamp-3 font-semibold">{description}</p>
            <div className="flex flex-row gap-3 py-3">
                <Calendar className="h-4 w-4 text-gray-500"></Calendar>
                <span className="text-sm text-gray-500">{date}</span>
            </div>
            <div className="flex flex-wrap gap-2">
                {(skill ?? []).map((item) => (
                    <Badge key={item} text={item} custom="border-gray-500"/>
                )
                )}
            </div>
        </div>
    );
}