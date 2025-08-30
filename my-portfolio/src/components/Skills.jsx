import SkillCard from "./SkillCard"
import { Moon, Sun, Mail, Github, Linkedin, ExternalLink, Download, Code, Database, Globe, Smartphone, ChevronDown } from 'lucide-react';
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
export default Skills