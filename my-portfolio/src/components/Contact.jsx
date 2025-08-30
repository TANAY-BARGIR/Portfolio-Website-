import { Moon, Sun, Mail, Github, Linkedin, ExternalLink, Download, Code, Database, Globe, Smartphone, ChevronDown } from 'lucide-react';
import ContactForm from "./ContactForm"
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
export default Contact