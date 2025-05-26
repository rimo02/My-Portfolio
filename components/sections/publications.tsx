"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const publications = [
    {
        id: 1,
        title: "IndiRTS: Real-Time Segmentation for Indian Conditions",
        journal: "SN Science Journal",
        year: 2024,
        authors: "Dr. Anjan Bandyopadhyay, Pritam Chakraborty, Rimo Ghosh, and Ritobrata Sarkar",
        abstract:
            "Developed a highly efficient custom semantic segmentation model for autonomous vehicles, achieving a Mean IOU (MIoU) of 0.6064 with a remarkably small footprint of just 0.45 million parameters. This lightweight design outperforms conventional models with nearly ten times more parameters. The model was specifically tailored for the complexities of urban driving using the Indian Driving Dataset (IDD), ensuring reliable segmentation in challenging Indian road conditions.",
        link: "",
    },
    {
        id: 2,
        title: "EUnet: Where Attention Meets Precision for Real-Time Lane Detection",
        journal: "Not yet published",
        year: 2025,
        authors: "Rimo Ghosh, Dr. Debanjan Pathak, and others",
        abstract:
            "Developed a lightweight and accurate lane segmentation model based on ENet. By combining multi-head attention with a hybrid encoder-decoder architecture, the model effectively captures long-range dependencies and global context. Key innovations—such as dilated convolutions, asymmetric decomposition, and UNet-style skip connections—enhance multi-scale feature extraction. With only 1.8 million parameters, our model achieves state-of-the-art results, reaching 97.91% accuracy and a 98.42% F1-score, outperforming top models like GANet, CLRNetV2, and PE-RESA. This makes it ideal for autonomous driving and traffic analysis tasks.",
        link: "#",
    },
];


export default function PublicationsSection() {
    return (
        <section id="publications" className="py-24 bg-accent/30">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Publications</h2>
                    <div className="h-1 w-20 bg-primary rounded-full"></div>
                    <p className="text-lg text-muted-foreground mt-6 text-center max-w-2xl">
                        My research contributions and publications in the field of machine learning.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {publications.map((publication, index) => (
                        <motion.div
                            key={publication.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>{publication.title}</CardTitle>
                                    <CardDescription>
                                        <span className="block">{publication.journal}, {publication.year}</span>
                                        <span className="block mt-1">{publication.authors}</span>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">{publication.abstract}</p>
                                    <Button variant="outline" size="sm" asChild>
                                        <a href={publication.link} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="h-4 w-4 mr-2" />
                                            Read Full Paper
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}