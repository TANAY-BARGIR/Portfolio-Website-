const ContactForm = ({ darkMode }) => {
  return (
    <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
      <div className="space-y-6">
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Name
          </label>
          <input
            type="text"
            className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              darkMode 
                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Email
          </label>
          <input
            type="email"
            className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              darkMode 
                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
            placeholder="your.email@example.com"
          />
        </div>
        
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Message
          </label>
          <textarea
            rows={4}
            className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-blue-5000 focus:border-transparent ${
              darkMode 
                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
            placeholder="Your message..."
          ></textarea>
        </div>
        
        <button
          type="button"
          onClick={() => alert('Contact form functionality would be implemented with a backend service!')}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};
export default ContactForm