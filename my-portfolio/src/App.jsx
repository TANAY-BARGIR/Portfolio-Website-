import React, { useState, useEffect } from 'react';
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
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


// components/Hero.jsx

// components/SkillCard.jsx

// components/Skills.jsx

// components/ProjectCard.jsx


// components/Projects.jsx

// components/ContactForm.jsx

// components/Contact.jsx

// components/Footer.jsx


export default App;