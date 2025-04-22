import React from 'react';
import { publications } from '../../data/publications';
import {
  Card,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/Card';
import { ExternalLink } from 'lucide-react';
import Animation from '../ui/Animation';

const Publications: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen py-10">
      <div className="flex items-center justify-center w-[90%]">
        <div className="flex flex-col gap-6 p-4 w-full">
          {publications.map((publication) => (
            <Animation key={publication.id}>
              <Card className="flex flex-col sm:flex-row overflow-hidden">
                <div className="sm:flex-shrink-0">
                  <div className="h-full">
                    <img
                      src={publication.imageUrl}
                      alt={publication.title}
                      className="w-full sm:w-132 h-40 sm:h-52 object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-r-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <CardHeader className="flex-1">
                    <CardTitle>{publication.title}</CardTitle>
                    <CardDescription>{publication.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-row gap-3">
                    {publication.paperUrl && (
                      <a
                        href={publication.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="items-center inline-flex dark:text-gray-300"
                      >
                        <ExternalLink size={20} className="mr-1" />
                        Read Paper
                      </a>
                    )}
                  </CardFooter>
                </div>
              </Card>
            </Animation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;