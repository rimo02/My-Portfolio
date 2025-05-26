"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/50 to-background"></div>
            </div>

            <div className="container px-4 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        <span className="block">Hi, I&apos;m </span>
                        <span className="text-primary">Rimo Ghosh</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl md:text-2xl text-muted-foreground mb-8"
                    >
                        A passionate Software developer specialized in creating elegant solutions to complex problems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button size="lg" className="text-lg" onClick={()=>{
                            const projectSection = document.getElementById("projects");
                            if(projectSection){
                                projectSection.scrollIntoView({behavior:"smooth"})
                            }
                        }}>
                            View My Work
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg" asChild>
                            <a href="/Rimo_Resume_SWE.pdf" download>
                            Download CV
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}