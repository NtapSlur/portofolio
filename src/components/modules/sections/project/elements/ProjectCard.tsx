import { Badge } from "@/components/core";
import Image from "next/image"
import ProjectButton from "./ProjectButton";

interface ProjectProp {
    name: string,
    image: string,
    description: string,
    url: string,
    skill: Array<string>
}


export default function ProjectCard({ name, image, description, url, skill }: Readonly<ProjectProp>) {
    return (
        <div className="w-[400px] border border-gray-300 rounded-xl shadow-md overflow-hidden flex flex-col">
            <div className="relative h-[200px]">
                <Image
                    src={image}
                    alt="Image"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <h1 className="px-5 py-3 text-xl font-bold">{name}</h1>
            <p className="px-5 pb-3 text-gray-500 text-md">{description}</p>
            <div className="px-5 pb-3 flex flex-wrap gap-2">
                {skill.map((item) => {
                    return (
                        <Badge key={item} text={item} custom="bg-gray-100 border-gray-100"/>
                    );
                })}
            </div>
            
            <div className="px-5 pb-3 mt-auto">
                <ProjectButton link={url} text="Check it out!"/>
            </div>
        </div>
    );
}