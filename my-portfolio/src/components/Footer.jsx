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
export default Footer