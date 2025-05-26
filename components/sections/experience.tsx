"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const experiences = [
    {
        id: 1,
        title: "Machine Learning Intern",
        company: "RenewHeat",
        duration: "July - September, 2024",
        location: "Remote",
        description: [
            "Built a hybrid recommender combining collaborative filtering and CLIP-based content methods with Milvus, boosting product discovery by 20%.",
            "Designed a Kafka-based feedback pipeline enabling real-time, adaptive recommendations with 30% lower latency.",
            "Built a graph-based recommendation module with Neo4j to identify complementary products, enhancing cross-selling opportunities and increasing average order value"
        ],
        technologies: ["PyTorch", "Kafka", "Neo4j"]
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-24">
            <div className="container px-4 mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Work Experience</h2>
                    <div className="h-1 w-20 bg-primary rounded-full"></div>
                    {/* <p className="text-lg text-muted-foreground mt-6 text-center max-w-2xl">
                        My professional journey in the tech industry, showcasing my growth and the diverse challenges I've tackled.
                    </p> */}
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Timeline connector */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>

                    {experiences.map((experience, index) => (
                        <motion.div
                            key={experience.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative mb-12 md:mb-24 md:w-1/2 ${index % 2 === 1 ? "md:ml-auto pl-3" : "pr-3"}`}
                        >
                            <Card>
                                <CardHeader className="gap-2">
                                    <CardTitle>{experience.title}</CardTitle>
                                    <CardDescription className="flex flex-wrap gap-2 flex-col">
                                        <span className="flex items-center">
                                            <Building className="h-4 w-4 mr-1" />
                                            {experience.company}
                                        </span>
                                        <div className="flex justify-between">
                                            <span className="flex items-center">
                                                <Calendar className="h-4 w-4 mr-1" />
                                                {experience.duration}
                                            </span>
                                            <span className="text-sm text-muted-foreground">{experience.location}</span>
                                        </div>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className={`mb-4 list-disc`}>
                                        {experience.description.map((item, i) => (
                                            <li key={i} className="mb-1">{item}</li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {experience.technologies.map(tech => (
                                            <Badge key={tech} variant="secondary">{tech}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}