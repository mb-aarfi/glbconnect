import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const ResourceSharing = ({ isLoggedIn, onLogout, currentUser }) => {
  const [resources, setResources] = useState([
    {
      id: 1,
      title: 'Data Structures and Algorithms Notes',
      description: 'Comprehensive notes covering all major DSA topics',
      category: 'Study Material',
      uploadedBy: 'John Doe',
      date: '2024-04-20',
      downloadCount: 120
    },
    {
      id: 2,
      title: 'Web Development Project Template',
      description: 'Starter template for React + Node.js projects',
      category: 'Project Templates',
      uploadedBy: 'Jane Smith',
      date: '2024-04-19',
      downloadCount: 85
    }
  ]);

  const [newResource, setNewResource] = useState({
    title: '',
    description: '',
    category: '',
    file: null
  });

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setNewResource({ ...newResource, file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically upload the file to your server
    console.log('Uploading resource:', newResource);
  };

  return (
    <Layout isLoggedIn={isLoggedIn} onLogout={onLogout}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Resource Sharing</h1>
        
        {/* Upload Resource Form */}
        {isLoggedIn && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                  onChange={handleFileUpload}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <Button type="submit">Upload Resource</Button>
            </form>
          </div>
        )}

        {/* Resources List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{resource.category}</span>
                <span>{resource.date}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Uploaded by: {resource.uploadedBy}
                </span>
                <span className="text-sm text-gray-500">
                  Downloads: {resource.downloadCount}
                </span>
              </div>
              <Button className="w-full mt-4">Download</Button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ResourceSharing; 