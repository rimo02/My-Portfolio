import { Github, Linkedin, Mail } from 'lucide-react';
import Animation from '../ui/Animation';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-12 overflow-auto ">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 justify-between w-full md:w-[75%] lg:w-[65%]">
        <Animation delay="delay-200">
          <div className="text-white text-center md:text-left">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-2">Hi,</h1>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-2">
              I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">
                Rimo
              </span>
            </h1>
            <p className="text-3xl md:text-4xl">A software developer</p>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start mt-4 md:mt-5">
              <button
                className="bg-white/10 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 border-blue-500/30 transition-all duration-300 rounded-full items-center gap-2 px-3 py-2 md:px-4 md:py-3"
              >
                <a
                  href="https://github.com/rimo02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Github className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  <span className="text-sm">GitHub</span>
                </a>
              </button>
              <button
                className="bg-white/10 text-purple-400 hover:bg-purple-500/20 hover:text-purple-300 border-purple-500/30 transition-all duration-300 px-3 py-2 rounded-full flex items-center gap-2 md:px-4 md:py-2"
              >
                <a
                  href="https://linkedin.com/in/your-linkedin-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </button>
              <button
                className="bg-white/10 text-green-400 hover:bg-green-500/20 hover:text-green-300
                  border-green-500/30 transition-all duration-300
                  px-3 py-2 rounded-full flex items-center md:px-4 md:py-2"
              >
                <Link to="/contact  " className="flex items-center justify-center">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  <span className="text-sm">Contact</span>
                </Link>
              </button>
            </div>
          </div>
        </Animation>

        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
          <img
            src="../../../public/profile.png"
            alt="Rimo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;