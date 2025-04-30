import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';

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
      <div className="bg-[#EEF3FF] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                From newcomers to navigators - connecting students to succeed together.
              </h1>
              <p className="text-gray-600 mb-6">
                A real-time platform designed to help juniors in college connect with seniors for personalized guidance.
              </p>
              {!isLoggedIn && (
                <div className="flex gap-4">
                  <Button onClick={() => navigate('/login')}>Login</Button>
                  <Button variant="outline" onClick={() => navigate('/register')}>Signup</Button>
                </div>
              )}
              {isLoggedIn && (
                <div className="flex gap-4">
                  <Button onClick={() => navigate('/messages')}>Go to Messages</Button>
                  <Button variant="outline" onClick={() => navigate('/anonymous')}>Anonymous Chat</Button>
                </div>
              )}
            </div>
            <div className="flex justify-center gap-4">
              <div className="w-1/3">
                <img src={student1} alt="Student" className="rounded-full w-full h-auto" />
              </div>
              <div className="w-1/3 mt-8">
                <img src={student2} alt="Student" className="rounded-full w-full h-auto" />
              </div>
              <div className="w-1/3">
                <img src={student3} alt="Student" className="rounded-full w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-[#4475F2] text-white py-4 md:py-8">
        <div className="overflow-hidden">
          <div className="flex space-x-8 md:space-x-16 animate-scroll">
            <div className="flex space-x-8 md:space-x-16 min-w-full">
              <button className="text-xl md:text-3xl font-bold whitespace-nowrap">GL Bajaj</button>
              <button className="text-xl md:text-3xl font-bold whitespace-nowrap">Galgotia</button>
              <button className="text-xl md:text-3xl font-bold whitespace-nowrap">NIET</button>
              <button className="text-xl md:text-3xl font-bold whitespace-nowrap">Jamia</button>
              <button className="text-xl md:text-3xl font-bold whitespace-nowrap">Bennett</button>
            </div>
            <div className="flex space-x-8 md:space-x-16 min-w-full">
              <button className="text-xl md:text-3xl font-bold whitespace-nowrap">GL Bajaj</button>
              <button className="text-xl md:text-3xl font-bold whitespace-nowrap">Galgotia</button>
              <button className="text-xl md:text-3xl font-bold whitespace-nowrap">NIET</button>
              <button className="text-xl md:text-3xl font-bold whitespace-nowrap">Jamia</button>
              <button className="text-xl md:text-3xl font-bold whitespace-nowrap">Bennett</button>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="text-center py-12">
        <p className="text-gray-600 italic">"Your journey, guided by those who've walked it before."</p>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why this App benefits the students?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-[#4475F2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Builds a Supportive Community</h3>
            <p className="text-gray-600">By connecting juniors and seniors, we create a supportive environment where students can share experiences and knowledge.</p>
          </div>
          <div className="text-center">
            <div className="bg-[#4475F2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Empowers Introverted Students</h3>
            <p className="text-gray-600">Through anonymous posting and private messaging, introverted students can seek help and advice comfortably without fear of judgment.</p>
          </div>
          <div className="text-center">
            <div className="bg-[#4475F2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Improves Career Guidance</h3>
            <p className="text-gray-600">Get insights on internships, placements, and career paths directly from those who've successfully navigated them.</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our main features</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-lg mb-4">
              <img src={qaIcon} alt="Q&A" className="w-16 h-16 mx-auto" />
            </div>
            <p className="font-medium">Q&A Threads</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-lg mb-4">
              <img src={jobIcon} alt="Jobs" className="w-16 h-16 mx-auto" />
            </div>
            <p className="font-medium">Job Portal</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-lg mb-4">
              <img src={resourceIcon} alt="Resources" className="w-16 h-16 mx-auto" />
            </div>
            <p className="font-medium">Resource Sharing</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-lg mb-4">
              <img src={anonymousIcon} alt="Anonymous" className="w-16 h-16 mx-auto" />
            </div>
            <p className="font-medium">Anonymous Posting</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-lg mb-4">
              <img src={alumniIcon} alt="Alumni" className="w-16 h-16 mx-auto" />
            </div>
            <p className="font-medium">Alumni Network</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-lg mb-4">
              <img src={liveIcon} alt="Live Sessions" className="w-16 h-16 mx-auto" />
            </div>
            <p className="font-medium">Live Sessions</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-lg mb-4">
              <img src={eventIcon} alt="Events" className="w-16 h-16 mx-auto" />
            </div>
            <p className="font-medium">Event Hub</p>
          </div>
        </div>
      </div>

      {/* Connect With Peers Section */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Connect With Experienced Peers</h2>
          <p className="mb-12 max-w-2xl">We are a passionate group of students committed to enhancing the college experience through peer mentorship. Our diverse backgrounds enable us to create a supportive community that helps every student thrive academically and personally.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white/10 rounded-lg p-4">
              <img src={peer1} alt="Thomas Lynn" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Thomas Lynn</h3>
              <p className="text-gray-400">Web Designer</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <img src={peer2} alt="Alex Reena" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Alex Reena</h3>
              <p className="text-gray-400">Web Development</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <img src={peer3} alt="Tom Curran" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Tom Curran</h3>
              <p className="text-gray-400">Marketing</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <img src={peer4} alt="David Miller" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">David Miller</h3>
              <p className="text-gray-400">Digital Marketing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="bg-[#4475F2] text-white py-8 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Give your valuable feedback to encourage us...</h2>
          <p className="mb-4 md:mb-8">Help teachers stay lean with GLB.Connect - Join now</p>
          <div className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter Your Feedback"
              className="flex-1 px-4 py-2 rounded-lg text-black w-full"
            />
            <Button variant="white" className="w-full md:w-auto">Submit</Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">GLB.Connect</h3>
            <p className="text-gray-600">Guiding students for a collaborative, growth-oriented college experience.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Our Team</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resource</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Feedback</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Home; 