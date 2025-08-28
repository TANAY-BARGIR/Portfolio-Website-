import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Github, Linkedin, ExternalLink, Download, Code, Database, Globe, Smartphone, ChevronDown } from 'lucide-react';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [githubRepos, setGithubRepos] = useState([]);

  // Fetch GitHub repos (replace 'yourusername' with actual GitHub username)
  useEffect(() => {
    setGithubRepos([
      {
        name: 'Ecommerce Website',
        description: 'This Ecommerce website is inspired by shopping features of various ecommerce websites.The layout of this website is inspired by Spotify-Music Platform',
        html_url: 'https://github.com/TANAY-BARGIR/Ecommerce-Website-2',
        language: 'JavaScript',
        topics: ['HTML', 'CSS', 'javascript', 'responsive']
      },
      {
        name: 'Code-Learn Platform', 
        description: 'CodeLearn is a learning platform inspired by W3Schools that helps users explore the basics and advanced concepts of HTML, CSS, and JavaScript. Built using React, Vite, and Tailwind CSS, this project is ideal for web development beginners.',
        html_url: 'https://github.com/TANAY-BARGIR/coding-platform',
        language: 'Typescript',
        topics: ['React', 'tailwindcss', 'javascript','typescript']
      },
      {
        name: 'Personal Expense Tracker', 
        description: 'A simple yet powerful web app to track daily expenses, manage budgets, and visualize spending patterns through charts. Built with Python (Flask) and integrated with data storage, it helps users stay on top of their finances.',
        html_url: 'https://github.com/TANAY-BARGIR/Personal-Expense-Tracker',
        language: 'Python',
        topics: ['HTML', 'CSS','Python', 'Flask']
      }
    ]);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Navbar 
        darkMode={darkMode} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        toggleDarkMode={toggleDarkMode} 
      />
      <Hero darkMode={darkMode} scrollToSection={scrollToSection} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} githubRepos={githubRepos} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

// ===== COMPONENTS =====

// components/Navbar.jsx
const Navbar = ({ darkMode, activeSection, scrollToSection, toggleDarkMode }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-md ${darkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'} border-b transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Portfolio
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors duration-200 ${
                  activeSection === section 
                    ? 'text-blue-500' 
                    : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              darkMode ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

// components/Hero.jsx
const Hero = ({ darkMode, scrollToSection }) => {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const words = ['Developer', 'Creator', 'Problem Solver', 'Tech Enthusiast'];
  const fullName = "Tanay Bargir";

  useEffect(() => {
    const word = words[currentWordIndex];
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= word.length) {
        setTypedText(word.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypedText('');
        }, 2000);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, [currentWordIndex]);

  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className={`w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold`}>
            {fullName.split(' ').map(n => n[0]).join('')}
          </div>
          
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">{fullName}</span>
          </h1>
          
          <div className={`text-2xl md:text-3xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm a <span className="text-blue-500 font-semibold">{typedText}</span>
            <span className="animate-pulse">|</span>
          </div>
          
          <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Second year Computer Science student passionate about creating innovative web solutions. 
            I love turning complex problems into simple, beautiful designs and building user-friendly applications 
            that make a difference. My goal is to become a full-stack developer and contribute to meaningful projects that impact people's lives positively.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </a>
            
            <a
              href="/resume.pdf"
              download
              className={`flex items-center gap-2 px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-200 ${
                darkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
          
          <div className="mt-12 animate-bounce">
            <ChevronDown 
              size={32} 
              className={`mx-auto cursor-pointer ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              onClick={() => scrollToSection('skills')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// components/SkillCard.jsx
const SkillCard = ({ skill, index, darkMode }) => {
  const IconComponent = skill.icon;
  
  return (
    <div
      className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
        darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white mb-4">
          <IconComponent size={28} />
        </div>
        <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {skill.name}
        </h3>
        <div className={`w-full bg-gray-300 rounded-full h-2 ${darkMode ? 'bg-gray-600' : ''}`}>
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
        <span className={`text-sm mt-2 block ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {skill.level}%
        </span>
      </div>
    </div>
  );
};

// components/Skills.jsx
const Skills = ({ darkMode }) => {
  const skills = [
    { name: 'HTML5', level: 80, icon: Code },
    { name: 'CSS3', level: 80, icon: Globe },
    { name: 'JavaScript', level: 60, icon: Code },
    { name: 'React', level: 60, icon: Code },
    { name: 'Express.js', level: 60, icon: Code },
    { name: 'SQL', level: 50, icon: Database },
    { name: 'Git', level: 50, icon: Github },
    { name: 'Responsive Design', level: 80, icon: Smartphone }
  ];

  return (
    <section id="skills" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Skills & <span className="text-blue-500">Technologies</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard 
              key={skill.name} 
              skill={skill} 
              index={index} 
              darkMode={darkMode} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// components/ProjectCard.jsx
const ProjectCard = ({ project, darkMode }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="h-48 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 relative">
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <div className="text-white text-6xl font-bold opacity-30">
            {project.name.charAt(0)}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {project.name}
        </h3>
        
        <p className={`mb-4 text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.topics?.slice(0, 4).map((tech, techIndex) => (
            <span
              key={techIndex}
              className={`px-3 py-1 text-sm rounded-full ${
                darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-800'
              }`}
            >
              {tech}
            </span>
          )) || (
            <span className={`px-3 py-1 text-sm rounded-full ${
              darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-800'
            }`}>
              {project.language}
            </span>
          )}
        </div>
        
        <div className="flex gap-4">
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
            }`}
          >
            <Github size={18} />
            Code
          </a>
          
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg transition-all duration-200"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// components/Projects.jsx
const Projects = ({ darkMode, githubRepos }) => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Featured <span className="text-blue-500">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {githubRepos.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              darkMode={darkMode} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// components/ContactForm.jsx
const ContactForm = ({ darkMode }) => {
  return (
    <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
      <div className="space-y-6">
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Name
          </label>
          <input
            type="text"
            className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              darkMode 
                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Email
          </label>
          <input
            type="email"
            className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              darkMode 
                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
            placeholder="your.email@example.com"
          />
        </div>
        
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Message
          </label>
          <textarea
            rows={4}
            className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-blue-5000 focus:border-transparent ${
              darkMode 
                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
            placeholder="Your message..."
          ></textarea>
        </div>
        
        <button
          type="button"
          onClick={() => alert('Contact form functionality would be implemented with a backend service!')}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

// components/Contact.jsx
const Contact = ({ darkMode }) => {
  return (
    <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Let's <span className="text-blue-500">Connect</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Get In Touch
            </h3>
            <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm always open to discussing new opportunities, creative projects, or just having a chat about technology. 
              Feel free to reach out if you'd like to connect!
            </p>
            
            <div className="space-y-4">
              <a
                href="mailto:tanay.bargir24@vit.edu"
                className={`flex items-center gap-4 p-4 rounded-lg transition-colors duration-200 ${
                  darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <Mail className="text-blue-500" size={24} />
                <span>tanay.bargir24@vit.edu</span>
              </a>
              
              <a
                href="https://github.com/TANAY-BARGIR"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-lg transition-colors duration-200 ${
                  darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <Github className="text-blue-500" size={24} />
                <span>GitHub Profile</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/tanay-bargir-94781a220"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-lg transition-colors duration-200 ${
                  darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <Linkedin className="text-blue-500" size={24} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
          
          <ContactForm darkMode={darkMode} />
        </div>
      </div>
    </section>
  );
};

// components/Footer.jsx
const Footer = ({ darkMode }) => {
  const fullName = "Tanay Bargir";
  
  return (
    <footer className={`py-8 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'} border-t`}>
      <div className="max-w-6xl mx-auto text-center">
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          © 2025 {fullName}. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default App;