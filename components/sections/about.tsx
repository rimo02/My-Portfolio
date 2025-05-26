"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="bg-background">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About Me</h2>
                    <div className="h-1 w-20 bg-primary rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[400px] rounded-lg overflow-hidden"
                    >
                        {/* <Image
                            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                            alt="Professional portrait"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        /> */}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-6">About Me?</h3>
                        <p className="text-lg text-muted-foreground mb-6">
                            I&apos;m a passionate software developer who loves building applications that solve real-world problems. What started as curiosity quickly turned into a drive to create smooth, user-friendly digital experiences — from clean interfaces to solid backend logic. Outside of coding, I enjoy playing football, watching movies etc.
                        </p>
                        <p className="text-lg text-muted-foreground mb-6">
                            Lately, I’ve been diving into machine learning, fascinated by how models learn and enhance intelligent systems. I’m always open to collaborating on exciting projects in development or ML — let’s build something great together!
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}