import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

const Header = ({ isLoggedIn, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  const isActive = (path) => {
    // Check if the current path starts with the given path
    // This handles nested routes like /messages/123
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-primary transition-all duration-300">
              GLB.Connect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/') && location.pathname === '/' 
                  ? 'text-primary' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Home
            </Link>
            {isLoggedIn && (
              <>
                <Link
                  to="/messages"
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive('/messages') 
                      ? 'text-primary' 
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  Messages
                </Link>
                <Link
                  to="/anonymous"
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive('/anonymous') 
                      ? 'text-primary' 
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  Anonymous Post
                </Link>
                <Link
                  to="/resources"
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive('/resources') 
                      ? 'text-primary' 
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  Resource Sharing
                </Link>
                {/* User Menu Dropdown */}
                <div className="relative">
                  <button
                    onClick={toggleUserMenu}
                    className="flex items-center space-x-2 focus:outline-none group"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center text-white font-medium">
                      {isLoggedIn ? 'U' : '?'}
                    </div>
                    <svg
                      className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                        isUserMenuOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10 border border-gray-100">
                      <Link
                        to="/profile"
                        className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                          isActive('/profile')
                            ? 'text-primary bg-primary/10'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Profile
                      </Link>
                      <Link
                        to="/settings"
                        className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                          isActive('/settings')
                            ? 'text-primary bg-primary/10'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Settings
                      </Link>
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsUserMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
            {!isLoggedIn && (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/login" 
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive('/login')
                      ? 'text-primary'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  Login
                </Link>
                <Button 
                  variant="primary" 
                  onClick={() => navigate('/register')}
                  className="px-4 py-2 text-sm"
                >
                  Register
                </Button>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            type="button" 
            className="md:hidden rounded-md p-2 text-gray-500 hover:text-primary focus:outline-none transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <nav className="py-4 space-y-2">
            <Link 
              to="/" 
              className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                isActive('/') && location.pathname === '/'
                  ? 'bg-primary/10 text-primary' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            {isLoggedIn && (
              <>
                <Link 
                  to="/messages" 
                  className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    isActive('/messages') 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Messages
                </Link>
                <Link 
                  to="/anonymous" 
                  className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    isActive('/anonymous') 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Anonymous Post
                </Link>
                <Link 
                  to="/resources" 
                  className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    isActive('/resources') 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resource Sharing
                </Link>
                <Link 
                  to="/profile" 
                  className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    isActive('/profile') 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link 
                  to="/settings" 
                  className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    isActive('/settings') 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Settings
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  Logout
                </button>
              </>
            )}
            {!isLoggedIn && (
              <div className="px-4 space-y-2">
                <Link 
                  to="/login" 
                  className={`block w-full px-4 py-2 text-sm font-medium text-center rounded-md transition-colors duration-200 ${
                    isActive('/login')
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Button 
                  variant="primary" 
                  onClick={() => {
                    navigate('/register');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full"
                >
                  Register
                </Button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 