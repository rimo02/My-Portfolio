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
    <div className="py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-center">
          
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
              © {currentYear} Rimo Ghosh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;