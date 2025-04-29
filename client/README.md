# GLB.Connect Frontend

A modern chat application with anonymous messaging features built with React, Tailwind CSS, and more.

## Features

- 🔐 User authentication (login/signup)
- 💬 One-to-one messaging
- 🕵️ Anonymous messaging
- 📱 Responsive design (mobile and desktop)
- 👤 Profile management
- 🔄 Real-time updates

## Technologies Used

- **React.js**: For building the user interface
- **Tailwind CSS**: For styling
- **React Router**: For navigation
- **Axios**: For API requests
- **Socket.io Client**: For real-time communication

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## Project Structure

```
client/
├── public/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Layout.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   └── Input.jsx
│   │   ├── MessageBubble.jsx
│   │   └── MessageList.jsx
│   ├── contexts/
│   ├── hooks/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Messages.jsx
│   │   ├── Profile.jsx
│   │   └── Register.jsx
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Backend Integration

This frontend is designed to work with the GLB.Connect backend API. Make sure the backend server is running for full functionality.

## How to Connect with Backend

1. Update the API base URL in the services config (if needed):
   ```javascript
   // src/services/api.js
   const API_URL = 'http://localhost:5000/api';
   ```

2. Ensure both frontend and backend CORS settings are properly configured.

## Additional Development Notes

- For now, the application uses mock data for demonstration purposes.
- Replace mock data with actual API calls when connecting to the backend.
