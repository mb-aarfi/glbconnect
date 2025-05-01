import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { motion, AnimatePresence } from 'framer-motion';
import * as api from '../services/api';

const ResourceSharing = ({ isLoggedIn, onLogout, currentUser }) => {
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [newResource, setNewResource] = useState({
    title: '',
    description: '',
    category: '',
    file: null
  });
  const [error, setError] = useState('');

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      setIsLoading(true);
      const response = await api.getResources();
      setResources(response || []);
    } catch (error) {
      console.error('Error fetching resources:', error);
      setError('Failed to load resources');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewResource({ ...newResource, file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newResource.file) {
      setError('Please select a file to upload');
      return;
    }

    try {
      setUploading(true);
      setError('');

      const formData = new FormData();
      formData.append('title', newResource.title);
      formData.append('description', newResource.description);
      formData.append('category', newResource.category);
      formData.append('file', newResource.file);

      const response = await api.uploadResource(formData);
      
      // Add the new resource to the list
      setResources(prevResources => [response, ...prevResources]);
      
      // Reset form
      setNewResource({
        title: '',
        description: '',
        category: '',
        file: null
      });
    } catch (error) {
      console.error('Error uploading resource:', error);
      setError('Failed to upload resource');
    } finally {
      setUploading(false);
    }
  };

  const handleDownload = async (resourceId, fileName) => {
    try {
      const response = await api.downloadResource(resourceId);
      const url = window.URL.createObjectURL(new Blob([response]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading resource:', error);
      setError('Failed to download resource');
    }
  };

  return (
    <Layout isLoggedIn={isLoggedIn} onLogout={onLogout}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto p-4"
      >
        <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Resource Sharing
        </h1>

        {/* Upload Form */}
        {isLoggedIn && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-8"
          >
            <h2 className="text-xl font-semibold mb-4">Upload New Resource</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Title"
                value={newResource.title}
                onChange={(e) => setNewResource({ ...newResource, title: e.target.value })}
                placeholder="Enter resource title"
                required
              />
              <Input
                label="Description"
                value={newResource.description}
                onChange={(e) => setNewResource({ ...newResource, description: e.target.value })}
                placeholder="Enter resource description"
                required
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={newResource.category}
                  onChange={(e) => setNewResource({ ...newResource, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Study Material">Study Material</option>
                  <option value="Project Templates">Project Templates</option>
                  <option value="Interview Prep">Interview Prep</option>
                  <option value="Research Papers">Research Papers</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  File
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  required
                />
              </div>
              {error && (
                <div className="text-red-500 text-sm">{error}</div>
              )}
              <Button
                type="submit"
                className="w-full"
                loading={uploading}
                disabled={uploading}
              >
                Upload Resource
              </Button>
            </form>
          </motion.div>
        )}

        {/* Resources List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <div className="col-span-full flex justify-center">
              <div className="text-gray-500">Loading resources...</div>
            </div>
          ) : resources.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">
              No resources available yet.
            </div>
          ) : (
            <AnimatePresence>
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {resource.title}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                        {resource.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>Uploaded by: {resource.uploadedBy}</span>
                      <span>{new Date(resource.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {resource.downloadCount} downloads
                      </span>
                      <Button
                        onClick={() => handleDownload(resource.id, resource.fileName)}
                        className="bg-blue-500 text-white hover:bg-blue-600"
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>
      </motion.div>
    </Layout>
  );
};

export default ResourceSharing; 