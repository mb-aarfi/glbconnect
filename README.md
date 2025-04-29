# QNA-Threads Chat Application

A real-time chat application with anonymous posting capabilities, built with React, Node.js, Express, and PostgreSQL.

## Complete Installation Guide

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm (Node Package Manager)

### Backend Installation (Root Directory)

1. Create `package.json` in root directory:
```json
{
  "name": "qna-threads",
  "version": "1.0.0",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "server": "nodemon server.js"
  },
  "dependencies": {
    "@prisma/client": "^6.6.0",
    "bcrypt": "^5.1.1",
    "cors": "^2.8.5",
    "dotenv": "^16.5.0",
    "express": "^4.21.2",
    "jsonwebtoken": "^9.0.2",
    "prisma": "^6.5.0",
    "socket.io": "^4.8.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.9"
  }
}
```

2. Install backend dependencies individually:
```bash
# Core dependencies
npm install @prisma/client@6.6.0
npm install bcrypt@5.1.1
npm install cors@2.8.5
npm install dotenv@16.5.0
npm install express@4.21.2
npm install jsonwebtoken@9.0.2
npm install prisma@6.5.0
npm install socket.io@4.8.1

# Development dependency
npm install nodemon@3.1.9 --save-dev
```

Or simply run:
```bash
npm install
```

### Frontend Installation (Client Directory)

1. Create `package.json` in client directory:
```json
{
  "name": "client",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/postcss": "^4.1.4",
    "autoprefixer": "^10.4.21",
    "axios": "^1.8.4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.488.0",
    "postcss": "^8.5.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.5.0",
    "socket.io-client": "^4.8.1",
    "tailwindcss": "^3.4.1",
    "zustand": "^5.0.3"
  },
  "devDependencies": {
    "@eslint/js": "^9.22.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.22.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "vite": "^6.3.0"
  }
}
```

2. Install frontend dependencies individually:
```bash
cd client

# Production dependencies
npm install @tailwindcss/postcss@4.1.4
npm install autoprefixer@10.4.21
npm install axios@1.8.4
npm install class-variance-authority@0.7.1
npm install clsx@2.1.1
npm install lucide-react@0.488.0
npm install postcss@8.5.3
npm install react@19.0.0
npm install react-dom@19.0.0
npm install react-router-dom@7.5.0
npm install socket.io-client@4.8.1
npm install tailwindcss@3.4.1
npm install zustand@5.0.3

# Development dependencies
npm install @eslint/js@9.22.0 --save-dev
npm install @types/react@19.0.10 --save-dev
npm install @types/react-dom@19.0.4 --save-dev
npm install @vitejs/plugin-react@4.3.4 --save-dev
npm install eslint@9.22.0 --save-dev
npm install eslint-plugin-react-hooks@5.2.0 --save-dev
npm install eslint-plugin-react-refresh@0.4.19 --save-dev
npm install globals@16.0.0 --save-dev
npm install vite@6.3.0 --save-dev
```

Or simply run:
```bash
cd client
npm install
```

### Environment Setup

1. Create `.env` in root directory:
```env
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/qna_threads"
JWT_SECRET="your_jwt_secret"
PORT=5000
```

2. Create `.env` in client directory:
```env
VITE_API_URL=http://localhost:5000
```

### Database Setup
```bash
# In root directory
npx prisma migrate dev
```

### Starting the Application

1. Start backend server:
```bash
# In root directory
npm run server
```

2. Start frontend development server:
```bash
# In client directory
cd client
npm run dev
```

## Features

- User authentication (login/register)
- Real-time private messaging
- Anonymous chat room
- Real-time message updates using WebSocket
- Modern UI with Tailwind CSS
- Responsive design

## Common Issues and Solutions

1. **Database Connection Issues**
   - Make sure PostgreSQL is running
   - Check DATABASE_URL in .env file
   - Ensure correct database name and credentials

2. **WebSocket Connection Issues**
   - Check if both frontend and backend servers are running
   - Verify port numbers in the connection URL
   - Check browser console for connection errors

3. **Installation Issues**
   - Clear node_modules and package-lock.json
   - Run npm install again
   - Make sure all dependencies are installed with correct versions

## License

This project is licensed under the MIT License. 