import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadGoogleScript = () => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        initializeGoogleSignIn();
      };
    };

    loadGoogleScript();
  }, []);

  const initializeGoogleSignIn = () => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: '1097973174997-sdiba1acvnivgh89qhgfbp7scjj27e83.apps.googleusercontent.com',
        callback: handleGoogleSignIn,
      });

      window.google.accounts.id.renderButton(
        document.getElementById('googleSignInButton'),
        { theme: 'outline', size: 'large', width: '250' }
      );
    }
  };

  const handleGoogleSignIn = async (response) => {
    try {
      const result = await axios.post('http://localhost:5000/api/google-auth', {
        token: response.credential,
      });

      console.log('Google sign-in successful:', result.data);
      localStorage.setItem('token', result.data.token);
      localStorage.setItem('user', JSON.stringify(result.data.user));

      navigate('/dashboard');
    } catch (err) {
      console.error('Google sign-in error:', err);
      setError(err.response?.data?.message || 'Google sign-in failed.');
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      console.log('Login successful:', response.data);
      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gray-900">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 opacity-90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      <motion.div
        className="absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-50"
        initial={{ scale: 1, x: '-50%', y: '-50%' }}
        animate={{ scale: 1.2, x: ['-50%', '-40%', '-50%'], y: ['-50%', '-60%', '-50%'] }}
        transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
      ></motion.div>
      <motion.div
        className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-50"
        initial={{ scale: 1, x: '50%', y: '50%' }}
        animate={{ scale: 1.4, x: ['50%', '60%', '50%'], y: ['50%', '40%', '50%'] }}
        transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
      ></motion.div>
      <motion.div
        className="absolute w-[700px] h-[700px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-50"
        initial={{ scale: 1, x: '-50%', y: '50%' }}
        animate={{ scale: 1.6, x: ['-50%', '-40%', '-50%'], y: ['50%', '60%', '50%'] }}
        transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
      ></motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 70,
          damping: 10,
        }}
        className="relative w-full max-w-4xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden z-10 border border-white/20"
      >
        <div className="grid md:grid-cols-2">
          {/* Left Side - Illustration */}
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-12 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                delay: 0.3,
              }}
              className="text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-4">Smart Home,</h2>
              <h2 className="text-4xl font-bold mb-6">Intelligent Living</h2>
              <p className="text-xl opacity-80">Secure, Connected, Effortless</p>
            </motion.div>
          </div>

          {/* Right Side - Login Form */}
          <div className="p-12 flex flex-col justify-center text-white">
            <h1 className="text-3xl font-bold text-white mb-8 text-center">DomoticAI</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 pl-4 bg-white/10 border-2 border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-all placeholder-white/50"
                />
              </div>

              {/* Password Input with Toggle */}
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 pl-4 pr-12 bg-white/10 border-2 border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-all placeholder-white/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-purple-300 transition-colors"
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>

              {/* Login Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-lg hover:opacity-90 transition-all"
              >
                Log In
              </motion.button>

              {/* Divider */}
              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-white/20"></div>
                <span className="mx-4 text-white/70">or</span>
                <div className="flex-grow border-t border-white/20"></div>
              </div>

              {/* Google Sign-In */}
              <div id="googleSignInButton" className="flex justify-center"></div>
            </form>

            <div className="text-center mt-6">
              <span className="text-white/70">Don't have an account? </span>
              <a href="/register" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                Sign up
              </a>
            </div>

            <div className="text-center mt-6">
              <a href="#" className="text-cyan-400 hover:text-cyan-200 transition-colors">
                Forgot Password?
              </a>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;