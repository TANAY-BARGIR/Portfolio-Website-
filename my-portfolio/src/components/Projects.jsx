import ProjectCard from "./ProjectCard"
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
export default Projects