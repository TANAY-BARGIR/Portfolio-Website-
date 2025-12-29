import React, { useState, useEffect } from "react";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [githubRepos, setGithubRepos] = useState([]);

  // Fetch GitHub repos (replace 'yourusername' with actual GitHub username)
  useEffect(() => {
    setGithubRepos([
      {
        name: "Anime-World-Project",
        description:
          "TA full-stack Node.js & Express application that catalogs anime characters. It uses a Hybrid Database Architecture: static content (Animes) is served via JSON files for performance, while dynamic user data (Users, Favorites) is stored in MongoDB.",
        html_url: "https://github.com/TANAY-BARGIR/Anime-World-Project",
        language: "javascript",
        topics: ["Node.js", "Express.js", "EJS", "Mongo DB"],
      },
      {
        name: "Ecommerce Website",
        description:
          "This Ecommerce website is inspired by shopping features of various ecommerce websites.The layout of this website is inspired by Spotify-Music Platform",
        html_url: "https://github.com/TANAY-BARGIR/Ecommerce-Website-2",
        language: "JavaScript",
        topics: ["HTML", "CSS", "javascript", "responsive"],
      },
      {
        name: "Code-Learn Platform",
        description:
          "CodeLearn is a learning platform inspired by W3Schools that helps users explore the basics and advanced concepts of HTML, CSS, and JavaScript. Built using React, Vite, and Tailwind CSS, this project is ideal for web development beginners.",
        html_url: "https://codelearn-by-tanay.netlify.app/",
        language: "Typescript",
        topics: ["React", "tailwindcss", "javascript", "typescript"],
      },
      {
        name: "Movie Recommendation System",
        description:
          "This project implements an AI-based movie recommendation system using the K-Nearest Neighbors (KNN) algorithm in C++ to provide personalized, item-based collaborative filtering. It highlights a significant performance advantage by building an algorithm 3.5x faster than industry-standard Python implementations, offering high-quality thematic suggestions with minimal latency.",
        html_url:
          "https://github.com/TANAY-BARGIR/Movie_Recommendation_System_KNN_LITE",
        language: "CPP",
        topics: ["CPP", "KNN", "Python"],
      },

      {
        name: "Personal Expense Tracker",
        description:
          "A simple and efficient Expense Tracker that helps you manage your daily spending, set budgets, and visualize expenses.",
        html_url: "https://github.com/TANAY-BARGIR/Personal-Expense-Tracker",
        language: "python",
        topics: ["HTML", "CSS", "javascript", "python", "Flask"],
      },
      {
        name: "Relational Algebra To SQL Conversion",
        description:
          "This website simplifies the process of understanding how abstract relational algebra operations (like selection, projection, join, union, etc.) map to practical SQL syntax. This tool is designed to support learning, practice, and quick validation, making it useful for both beginners in DBMS and those preparing for exams or projects.",
        html_url:
          "https://github.com/TANAY-BARGIR/Relational_Algebra_To_SQL_JS",
        language: "javascript",
        topics: ["HTML", "CSS", "javascript", "SQL"],
      },
    ]);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
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
