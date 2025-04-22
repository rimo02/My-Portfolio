import React from 'react';
import { socialLinks } from '../../data/social';
import { Github as GitHub, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <GitHub size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      case 'instagram':
        return <Instagram size={20} />;
      case 'mail':
        return <Mail size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Portfolio<span className="text-indigo-600">.</span>
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
              Creating beautiful, functional web experiences with cutting-edge technologies.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                  aria-label={link.platform}
                >
                  {getIconComponent(link.icon)}
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;