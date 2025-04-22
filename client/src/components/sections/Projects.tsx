import React from 'react';
import { projects } from '../../data/project';
import {
    Card,
    CardContent,
    CardFooter,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../ui/Card';
import { ExternalLink, Github } from 'lucide-react'
import Animation from '../ui/Animation';


const Projects: React.FC = () => {
    return (
        <div className='flex justify-center items-center min-h-screen py-10'>
            <div className='flex items-center justify-center w-[90%]'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                    {projects.map((project) => (

                        <Animation>
                            <Card key={project.id}>
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="bg-gray-100 text-sm px-2 py-1 rounded-md text-gray-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent >
                                <CardFooter className='display-flex flex-row gap-3'>
                                    {
                                        project.projectUrl &&
                                        <a href={project.projectUrl}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='items-center inline-flex dark:text-gray-300'
                                        >
                                            <ExternalLink size={20} className='mr-1' />
                                            Live Demo
                                        </a>
                                    }
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-muted-foreground"
                                        >
                                            <Github size={18} className="mr-1" />
                                            Code
                                        </a>
                                    )}
                                </CardFooter>
                            </Card>
                        </Animation>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;