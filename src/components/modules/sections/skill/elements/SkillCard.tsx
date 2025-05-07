import { Badge } from "@/components/core";

interface SkillCardProps {
    category: string,
    skill: Array<string>
}

export default function SkillCard({ category, skill }: Readonly<SkillCardProps>) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-5 w-auto h-full flex flex-col hover:shadow-lg transition duration-300 hover:scale-102 gap-4">
            <h2 className="text-xl py-2 font-semibold">{category}</h2>
            <div className="flex flex-wrap gap-2">
                {(skill ?? []).map((item) => (
                    <Badge key={item} text={item} custom={"bg-gray-100 border-gray-100"}/>
                )
                )}
            </div>
        </div>
    );
}