import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Github, Linkedin, ExternalLink, Download, Code, Database, Globe, Smartphone, ChevronDown } from 'lucide-react';
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
              href=""
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

export default Hero