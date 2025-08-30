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
export default SkillCard