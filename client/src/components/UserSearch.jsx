import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as api from '../services/api';
import Button from './ui/Button';

const UserSearch = ({ onSelectUser }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const searchTimeout = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Handle clicking outside to close results
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Search as user types with debounce
  useEffect(() => {
    // Clear previous timeout
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    if (query.trim().length > 0) {
      // Set new timeout (300ms debounce)
      searchTimeout.current = setTimeout(() => {
        handleSearch();
      }, 300);
    } else {
      setResults([]);
      setShowResults(false);
    }

    return () => {
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current);
      }
    };
  }, [query]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    setError('');
    
    try {
      const users = await api.searchUsers(query);
      
      // Sort results to prioritize matches at the beginning of name
      const sortedUsers = [...users].sort((a, b) => {
        // Names that start with the query should come first
        const aNameStarts = a.name.toLowerCase().startsWith(query.toLowerCase());
        const bNameStarts = b.name.toLowerCase().startsWith(query.toLowerCase());
        
        if (aNameStarts && !bNameStarts) return -1;
        if (!aNameStarts && bNameStarts) return 1;
        
        // Then names containing the query
        const aNameContains = a.name.toLowerCase().includes(query.toLowerCase());
        const bNameContains = b.name.toLowerCase().includes(query.toLowerCase());
        
        if (aNameContains && !bNameContains) return -1;
        if (!aNameContains && bNameContains) return 1;
        
        // Then emails
        return a.name.localeCompare(b.name);
      });
      
      setResults(sortedUsers);
      setShowResults(true);
    } catch (error) {
      console.error('Search error:', error);
      setError('Failed to search users');
    } finally {
      setIsSearching(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (results.length > 0) {
        handleUserSelect(results[0]);
      }
    }
  };

  const handleUserSelect = (user) => {
    // If onSelectUser prop exists, call it with full user details
    if (onSelectUser) {
      onSelectUser(user.id, {
        userId: user.id,
        name: user.name,
        email: user.email,
        isAnonymous: false
      });
    } else {
      // Otherwise just navigate
      navigate(`/messages/${user.id}`);
    }
    
    setShowResults(false);
    setQuery('');
  };

  return (
    <div className="relative w-full" ref={searchRef}>
      <div className="flex w-full">
        <input
          type="text"
          placeholder="Search users by name or email..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        {isSearching && (
          <div className="absolute right-3 top-2.5">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-primary"></div>
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      
      {showResults && results.length > 0 && (
        <div className="absolute z-10 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg">
          <ul className="max-h-60 overflow-auto py-1">
            {results.map((user) => (
              <li
                key={user.id}
                onClick={() => handleUserSelect(user)}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              >
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {showResults && query.trim() && results.length === 0 && (
        <div className="absolute z-10 mt-1 w-full rounded-md border border-gray-300 bg-white p-4 shadow-lg">
          <p className="text-center text-gray-500">No users found</p>
        </div>
      )}
    </div>
  );
};

export default UserSearch; 