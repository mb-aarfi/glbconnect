import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';

// Import student images
import student1 from '../assets/student1.png';
import student2 from '../assets/student2.png';
import student3 from '../assets/student3.png';

// Import feature icons
import qaIcon from '../assets/qa-icon.png';
import jobIcon from '../assets/job-icon.png';
import resourceIcon from '../assets/resource-icon.png';
import anonymousIcon from '../assets/anonymous-icon.png';
import alumniIcon from '../assets/alumni-icon.png';
import liveIcon from '../assets/live-icon.png';
import eventIcon from '../assets/event-icon.png';

// Import peer images
import peer1 from '../assets/peer1.png';
import peer2 from '../assets/peer2.png';
import peer3 from '../assets/peer3.png';
import peer4 from '../assets/peer4.png';

const Home = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  return (
    <Layout isLoggedIn={isLoggedIn} onLogout={onLogout}>
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-[#EEF3FF] to-[#E0E9FF] py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                From newcomers to navigators - connecting students to succeed together.
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                A real-time platform designed to help juniors in college connect with seniors for personalized guidance.
              </p>
              {!isLoggedIn && (
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Button onClick={() => navigate('/login')} className="transform hover:scale-105 transition-transform duration-300">Login</Button>
                  <Button variant="outline" onClick={() => navigate('/register')} className="transform hover:scale-105 transition-transform duration-300">Signup</Button>
                </motion.div>
              )}
              {isLoggedIn && (
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Button onClick={() => navigate('/messages')} className="transform hover:scale-105 transition-transform duration-300">Go to Messages</Button>
                  <Button variant="outline" onClick={() => navigate('/anonymous')} className="transform hover:scale-105 transition-transform duration-300">Anonymous Chat</Button>
                </motion.div>
              )}
            </motion.div>
            <motion.div 
              className="flex justify-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="w-1/3"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <img src={student1} alt="Student" className="rounded-full w-full h-auto shadow-lg" />
              </motion.div>
              <motion.div 
                className="w-1/3 mt-8"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <img src={student2} alt="Student" className="rounded-full w-full h-auto shadow-lg" />
              </motion.div>
              <motion.div 
                className="w-1/3"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <img src={student3} alt="Student" className="rounded-full w-full h-auto shadow-lg" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Navigation Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-gradient-to-r from-primary to-blue-600 text-white py-6"
      >
        <div className="overflow-hidden">
          <div className="flex space-x-8 md:space-x-16 animate-scroll">
            <div className="flex space-x-8 md:space-x-16 min-w-full">
              {['GL Bajaj', 'Galgotia', 'NIET', 'Jamia', 'Bennett'].map((college, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-xl md:text-3xl font-bold whitespace-nowrap hover:text-blue-200 transition-colors duration-300"
                >
                  {college}
                </motion.button>
              ))}
            </div>
            <div className="flex space-x-8 md:space-x-16 min-w-full">
              {['GL Bajaj', 'Galgotia', 'NIET', 'Jamia', 'Bennett'].map((college, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-xl md:text-3xl font-bold whitespace-nowrap hover:text-blue-200 transition-colors duration-300"
                >
                  {college}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quote Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center py-16 bg-white"
      >
        <motion.p 
          className="text-2xl text-gray-600 italic max-w-2xl mx-auto"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          "Your journey, guided by those who've walked it before."
        </motion.p>
      </motion.div>

      {/* Benefits Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="container mx-auto px-4 py-20 bg-gray-50"
      >
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Why this App benefits the students?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ),
              title: "Builds a Supportive Community",
              description: "By connecting juniors and seniors, we create a supportive environment where students can share experiences and knowledge."
            },
            {
              icon: (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ),
              title: "Empowers Introverted Students",
              description: "Through anonymous posting and private messaging, introverted students can seek help and advice comfortably without fear of judgment."
            },
            {
              icon: (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              ),
              title: "Improves Career Guidance",
              description: "Get insights on internships, placements, and career paths directly from those who've successfully navigated them."
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-gradient-to-r from-primary to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="container mx-auto px-4 py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Our Main Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              icon: qaIcon, 
              title: "Q&A Threads",
              description: "Get instant answers to your questions from experienced seniors and alumni."
            },
            { 
              icon: jobIcon, 
              title: "Job Portal",
              description: "Access exclusive job opportunities and internship listings from top companies."
            },
            { 
              icon: resourceIcon, 
              title: "Resource Sharing",
              description: "Share and discover study materials, notes, and valuable academic resources."
            },
            { 
              icon: anonymousIcon, 
              title: "Anonymous Posting",
              description: "Ask questions and share concerns anonymously without any hesitation."
            },
            { 
              icon: alumniIcon, 
              title: "Alumni Network",
              description: "Connect with successful alumni for mentorship and career guidance."
            },
            { 
              icon: liveIcon, 
              title: "Live Sessions",
              description: "Join interactive live sessions with experts and industry professionals."
            },
            { 
              icon: eventIcon, 
              title: "Event Hub",
              description: "Stay updated with upcoming college events, workshops, and competitions."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className={`group ${index === 6 ? 'md:col-start-2 lg:col-start-2' : ''}`}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center text-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300"
                >
                  <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Connect With Peers Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Connect With Experienced Peers
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
              We are a passionate group of students committed to enhancing the college experience through peer mentorship. Our diverse backgrounds enable us to create a supportive community that helps every student thrive academically and personally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { image: peer1, name: "Thomas Lynn", role: "Web Designer", expertise: "UI/UX Design" },
              { image: peer2, name: "Alex Reena", role: "Web Development", expertise: "Full Stack" },
              { image: peer3, name: "Tom Curran", role: "Marketing", expertise: "Digital Marketing" },
              { image: peer4, name: "David Miller", role: "Digital Marketing", expertise: "Social Media" }
            ].map((peer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <motion.img
                      src={peer.image}
                      alt={peer.name}
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {peer.name}
                    </h3>
                    <p className="text-gray-400 mb-2">{peer.role}</p>
                    <p className="text-sm text-primary/80">{peer.expertise}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Feedback Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="bg-gradient-to-r from-primary to-blue-600 text-white py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Give your valuable feedback to encourage us...</h2>
          <p className="mb-8 text-lg">Help teachers stay lean with GLB.Connect - Join now</p>
          <motion.div 
            className="max-w-md mx-auto flex flex-col md:flex-row gap-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <input
              type="text"
              placeholder="Enter Your Feedback"
              className="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button variant="white" className="transform hover:scale-105 transition-transform duration-300">
              Submit
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-bold text-2xl mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              GLB.Connect
            </h3>
            <p className="text-gray-600">Guiding students for a collaborative, growth-oriented college experience.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">Our Team</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Resource</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">Feedback</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </Layout>
  );
};

export default Home; 