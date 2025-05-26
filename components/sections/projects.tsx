"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        id: "1",
        title: "ShopEase",
        tags: ["React", "Stripe", "MongoDB", "Firebase", "Express", "Redux"],
        image:
            "https://www.searchenginejournal.com/wp-content/uploads/2020/03/20-free-things-you-need-to-do-after-launching-your-ecommerce-website-5e664bcb60da5.png ",
        projectUrl: "https://shopeasy-948j.onrender.com/",
        githubUrl: "https://github.com/rimo02/ShopEase",
        featured: true,
        description:
            "A full-stack e-commerce app using React, Node.js, and Firebase, features JWT authentication with role-based access, secure Stripe payments, paginated product displays, and an admin dashboard. Optimized queries, strong security, and cloud deployment ensure performance and scalability.",
        category: "web",
    },
    {
        id: "2",
        title: "SocialWave",
        tags: ["NextJs", "MongoDB", "Firebase", "AuthJs"],
        image:
            "https://static.vecteezy.com/system/resources/thumbnails/058/570/380/small_2x/digital-marketing-2d-animation-business-social-marketing-concept-characters-create-ads-manage-social-media-campaigns-and-analyze-marketing-data-in-a-scalable-style-video.jpg",
        projectUrl: "",
        githubUrl: "https://github.com/rimo02/SocialWave",
        featured: true,
        description:
            "A lightweight, real-time social media platform was built with features for posting, liking, following, and sharing. It uses Next.js for dynamic content fetching and efficient feed updates (via ISR) and integrates secure, user login through OAuth (Google, via Auth.js).",
        category: "web",
    },
    {
        id: "3",
        title: "CollabDocs",
        description:
            "A real-time collaborative text editor similar to Google Docs. It features JWT-based authentication for secure access control, persistent document storage for managing user files, and real-time synchronization using Socket.io, enabling smooth, low-latency collaboration among multiple users.",
        category: "web",
        tags: ["React", "NodeJs", "MongoDB", "Socket.io", "Express"],
        image: "https://store-images.s-microsoft.com/image/apps.62132.14122435581357066.0fcc9558-8297-4472-bcd9-427465cc7c1c.51c692fe-2e03-4d07-b5e5-e1fef11cfd97?h=253",
        githubUrl: "https://github.com/rimo02/CollabDocs",
        projectUrl: "https://collabdocs-3skq.onrender.com/",
        featured: true,
    },
    {
        id: "4",
        title: "GoBalancer",
        description:
            "A simple load balancer designed to distribute network traffic efficiently. It uses a weighted Round Robin scheduling algorithm to manage traffic across multiple backend servers. Furthermore, it includes regular health checks to monitor the status of these servers, dynamically adjusting traffic routing based on their availability and performance, increasing overall system reliablility",
        category: "web",
        tags: ["Golang"],
        image:
            "https://sslinsights.com/wp-content/uploads/2024/10/load-balancer.png",
        githubUrl: "https://github.com/rimo02/GoBalancer",
        featured: true,
    },
    {
        id: "5",
        title: "AniVerse",
        description:
            "Developed a full-stack anime web application with Next.js, featuring infinite scrolling and advanced search/filters. Implemented secure OAuth authentication with NextAuth.js and optimized performance/SEO using ISR, PPR, and SSG.",
        category: "web",
        tags: ["NextJs", "NextAuth", "MongoDB"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7k1EnuQaLkDBzPqEeftbRl-qwdVFHC3km9Q&s",
        projectUrl: "https://aniverse-theta.vercel.app/",
        githubUrl: "https://github.com/rimo02/AniVerse",
        featured: true,
    },
    {
        id: "6",
        title: "LLM Fine-Tuning for Logical Reasoning",
        description:
            "Fine-tuned the TinyLlama-1B language model to improve logical reasoning using the Facebook/Natural Reasoning dataset. Applied LoRA to key transformer layers and used 4-bit quantization to enhance efficiency without increasing model size. Training was further optimized through mixed-precision computation and gradient accumulation.",
        category: "Machine Learning",
        tags: ["Pytorch"],
        image:
            "https://cdn.prod.website-files.com/6752ed91ddf74c98d49aa0e4/679b99d70261c2a128d4912c_679a85643fadbc11c974fd80_b706199a-c446-47ee-b322-fce8cfc2e556_deepset_blog_FineTuning.webp",
        featured: true,
    },
    {
        id: "7",
        title: "Image Colorizer",
        description:
            "Developed a PyTorch-based image colorization model inspired by recent research, using a ResNet backbone for feature extraction and a generative network to predict realistic colors for grayscale images. Initially trained on the ImageNet-12k dataset, the model was further fine-tuned on diverse image types such as landscapes and animals, achieving over 65% accuracy.",
        category: "Machine Learning",
        tags: ["PyTorch", "Streamlit"],
        image: "https://hotpot.ai/images/site/ai/colorizer/teaser.jpg",
        githubUrl: "https://github.com/rimo02/ReviVr",
        featured: true,
    },
    {
        id: "8",
        title: "TwistGPT",
        description:
            "Built a GPT-2 language model from the ground up. Implemeted features like masked self attention and specifically trained on a collection of short stories by O'Henry, an author famous for his unexpected plot twists.",
        category: "Machine Learning",
        tags: ["Pytorch"],
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8iBjK7nDCRbuURfQPaOGNkFjeGXl5cuvmnw&s",
        githubUrl: "https://github.com/rimo02/TwistGpt",
        featured: true,
    },
    {
        id: "9",
        title: "GoBitly",
        description:
            "Developed a URL shortener service using Go and Gin, integrating MongoDB for persistent storage of shortened URLs, expiration details, and click analytics. Performance was optimized through in-memory caching with Redis. A rate-limiting mechanism, based on IP address, was implemented to prevent abuse and ensure high service availability.",
        category: "web",
        tags: ["Golang", "MongoDB", "React", "Redis"],
        image: "https://goo.by/content/avatar/zZnyCd_goo-url-shortener.png",
        githubUrl: "https://github.com/rimo02/gobitly",
        featured: true,
    },
];

type Category = "all" | "web" | "Machine Learning";

export default function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState<Category>("all");

    const filteredProjects = activeCategory === "all"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="py-24">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">My Projects</h2>
                    <div className="h-1 w-20 bg-primary rounded-full"></div>
                    <p className="text-lg text-muted-foreground mt-6 text-center max-w-2xl">
                        Here are some of my recent projects. Each one was built to solve specific problems and showcase different skills.
                    </p>
                </motion.div>

                <div className="flex justify-center mb-12">
                    <div className="flex flex-wrap gap-2 justify-center">
                        <Button
                            variant={activeCategory === "all" ? "default" : "outline"}
                            onClick={() => setActiveCategory("all")}
                        >
                            All Projects
                        </Button>
                        <Button
                            variant={activeCategory === "web" ? "default" : "outline"}
                            onClick={() => setActiveCategory("web")}
                        >
                            Web Development
                        </Button>
                        <Button
                            variant={activeCategory === "Machine Learning" ? "default" : "outline"}
                            onClick={() => setActiveCategory("Machine Learning")}
                        >
                            ML/DL
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="h-full"
                        >
                            <Card className="h-full flex flex-col overflow-hidden">
                                <div className="relative h-48">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="secondary">{tag}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button variant="outline" size="sm" asChild>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <Github className="h-4 w-4 mr-2" />
                                            Code
                                        </a>
                                    </Button>
                                    <Button size="sm" asChild>
                                        {project.projectUrl && <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="h-4 w-4 mr-2" />
                                            Live Demo
                                        </a>}
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}