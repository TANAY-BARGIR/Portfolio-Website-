import { Moon, Sun, Mail, Github, Linkedin, ExternalLink, Download, Code, Database, Globe, Smartphone, ChevronDown } from 'lucide-react';
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

export default Navbar