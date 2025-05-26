import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import ExperienceSection from "@/components/sections/experience";
import HeroSection from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/projects";
import PublicationsSection from "@/components/sections/publications";
import SkillsSection from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="overflow:auto">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <PublicationsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
