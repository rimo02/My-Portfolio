import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Publications from './components/sections/Publications';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-white dark:bg-gradient-to-br from-gray-900 via-purple-950 to-black min-h-screen transition-colors duration-300 w-full">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/experience" element={<Experience/>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
