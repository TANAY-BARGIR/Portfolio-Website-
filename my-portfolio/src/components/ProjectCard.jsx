import { Moon, Sun, Mail, Github, Linkedin, ExternalLink, Download, Code, Database, Globe, Smartphone, ChevronDown } from 'lucide-react';
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
export default ProjectCard