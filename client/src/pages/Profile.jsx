import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Profile = ({ isLoggedIn, onLogout, currentUser, onUpdateProfile }) => {
  const [formData, setFormData] = useState({
    name: currentUser?.name || 'Test User',
    email: currentUser?.email || 'test@example.com',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const navigate = useNavigate();
  
  // Redirect to login if not logged in
  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    // Clear success message when form changes
    if (updateSuccess) {
      setUpdateSuccess(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (formData.password && formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      // In a real app, this would be an API call
      // const response = await api.updateProfile(formData);
      
      // For demo purposes, we'll simulate a successful update
      setTimeout(() => {
        onUpdateProfile && onUpdateProfile({
          ...currentUser,
          name: formData.name,
          email: formData.email
        });
        
        // Clear passwords and show success message
        setFormData(prev => ({
          ...prev,
          password: '',
          confirmPassword: ''
        }));
        
        setUpdateSuccess(true);
      }, 1000);
      
    } catch (error) {
      setErrors({
        form: 'Failed to update profile. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout isLoggedIn={isLoggedIn} onLogout={onLogout}>
      <div className="mx-auto max-w-2xl">
        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="mb-6 text-2xl font-bold text-gray-900">Your Profile</h1>
          
          {updateSuccess && (
            <div className="mb-4 rounded-md bg-green-50 p-4 text-sm text-green-700">
              Profile updated successfully!
            </div>
          )}
          
          {errors.form && (
            <div className="mb-4 rounded-md bg-red-50 p-4 text-sm text-red-700">
              {errors.form}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="mb-4 md:mb-0 md:w-1/2">
                <Input
                  type="text"
                  name="name"
                  label="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  error={errors.name}
                  fullWidth
                />
              </div>
              <div className="md:w-1/2">
                <Input
                  type="email"
                  name="email"
                  label="Email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  error={errors.email}
                  fullWidth
                />
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">Change Password</h2>
              <p className="mb-4 text-sm text-gray-600">Leave blank if you don't want to change your password.</p>
              
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="mb-4 md:mb-0 md:w-1/2">
                  <Input
                    type="password"
                    name="password"
                    label="New Password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter new password"
                    error={errors.password}
                    fullWidth
                  />
                </div>
                <div className="md:w-1/2">
                  <Input
                    type="password"
                    name="confirmPassword"
                    label="Confirm New Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm new password"
                    error={errors.confirmPassword}
                    fullWidth
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end pt-4">
              <Button
                type="submit"
                loading={isLoading}
                disabled={isLoading}
              >
                Save Changes
              </Button>
            </div>
          </form>
        </div>
        
        <div className="mt-8 rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Messaging Preferences</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-md font-medium text-gray-900">Anonymous Messages</h3>
                <p className="text-sm text-gray-600">Allow receiving messages from anonymous users.</p>
              </div>
              <div className="relative inline-block w-12 h-6">
                <input 
                  type="checkbox" 
                  id="allow-anonymous" 
                  className="sr-only"
                  defaultChecked={true}
                />
                <label 
                  htmlFor="allow-anonymous" 
                  className="block h-6 w-12 rounded-full bg-gray-300 cursor-pointer transition-colors duration-200 ease-in-out before:absolute before:h-4 before:w-4 before:rounded-full before:bg-white before:top-1 before:left-1 before:transition-transform before:duration-200 checkbox-toggle"
                >
                  <span className="sr-only">Allow anonymous messages</span>
                </label>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-md font-medium text-gray-900">Email Notifications</h3>
                <p className="text-sm text-gray-600">Receive email notifications for new messages.</p>
              </div>
              <div className="relative inline-block w-12 h-6">
                <input 
                  type="checkbox" 
                  id="email-notifications" 
                  className="sr-only"
                  defaultChecked={true}
                />
                <label 
                  htmlFor="email-notifications" 
                  className="block h-6 w-12 rounded-full bg-gray-300 cursor-pointer transition-colors duration-200 ease-in-out before:absolute before:h-4 before:w-4 before:rounded-full before:bg-white before:top-1 before:left-1 before:transition-transform before:duration-200 checkbox-toggle"
                >
                  <span className="sr-only">Email notifications</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-end">
          <Button 
            variant="outline" 
            className="text-red-600 border-red-600 hover:bg-red-50"
            onClick={onLogout}
          >
            Log Out
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Profile; 