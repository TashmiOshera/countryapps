import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white/90 shadow-xl border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Increased header height here */}
        <div className="flex justify-between items-center h-28">
          {/* Logo - Left, deep blue accent */}
          <div
            className="flex-shrink-0 text-3xl sm:text-4xl font-extrabold font-sans text-[#2563eb] cursor-pointer hover:text-[#14b8a6] transition duration-300 tracking-widest"
            onClick={() => navigate('/')}
          >
            🌍 Country Explorer
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:flex sm:space-x-10 text-base font-semibold font-sans tracking-wide">
            <button
              onClick={() => navigate('/')}
              className="text-[#2563eb] hover:text-[#14b8a6] transition duration-300"
            >
              Home
            </button>
            <button
              onClick={() => navigate('/country-explorer')}
              className="text-[#2563eb] hover:text-[#14b8a6] transition duration-300"
            >
              Country Explorer
            </button>
            <button
              onClick={() => navigate('/favorites')}
              className="text-[#2563eb] hover:text-[#14b8a6] transition duration-300"
            >
              Favorites
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 text-sm font-medium font-sans">
            <button
              onClick={() => navigate('/world-map')}
              className="bg-[#2563eb] hover:bg-[#14b8a6] text-white text-base py-2 px-5 rounded-lg shadow-md transition duration-300"
            >
              🌍 View World Map
            </button>
            {!isAuthenticated ? (
              <button
                onClick={() => navigate('/login')}
                className="bg-[#14b8a6] hover:bg-[#2563eb] text-white text-base py-2 px-5 rounded-lg shadow-md transition duration-300"
              >
                🔑 Login
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-500 text-white text-base py-2 px-5 rounded-lg shadow-md transition duration-300"
              >
                🚪 Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
