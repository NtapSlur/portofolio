'use client';

import { Navbar, Footer } from "@/components/core";
import { AboutSection, ExperienceSection, SkillSection, ProjectSection } from "@/components/modules"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <AboutSection />
            <ExperienceSection />
            <SkillSection />
            <ProjectSection />
            <Footer />
        </div>
    );
}
