SignupPage.jsx 
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
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
      navigate('/dashboard');
    } catch (err) {
      console.error('Google sign-in error:', err);
      setError(err.response?.data?.message || 'Google sign-in failed.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        email,
        password,
        confirmPassword,
      });

      console.log('Signup successful:', response.data);
      navigate('/dashboard');
    } catch (err) {
      console.error('Signup error:', err);
      setError(err.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      {/* Other background effects... */}

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 70, damping: 10 }}
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10"
      >
        <div className="grid md:grid-cols-2">
          {/* Left Side - Illustration */}
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-12 flex items-center justify-center relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
              className="text-center text-white z-10"
            >
              <h2 className="text-4xl font-bold mb-4">Create Your</h2>
              <h2 className="text-4xl font-bold mb-6">DomoticAI Account</h2>
              <p className="text-xl opacity-80">Secure, Connected, Effortless</p>
            </motion.div>
          </div>

          {/* Right Side - Signup Form */}
          <div className="p-12 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sign Up</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 pl-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition-all"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 pl-4 pr-12 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-teal-600 transition-colors"
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>

              {/* Confirm Password Input */}
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-3 pl-4 pr-12 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-teal-600 transition-colors"
                >
                  {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
              
              {/* Signup Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white p-3 rounded-lg hover:opacity-90 transition-all"
              >
                Sign Up
              </motion.button>

              {/* Divider */}
              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500">or</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              {/* Google Sign Up */}
              <div id="googleSignInButton" className="flex justify-center"></div>
            </form>

            <div className="text-center mt-6">
              <span className="text-gray-600">Already have an account? </span>
              <a href="/login" className="text-teal-600 hover:text-blue-600 transition-colors">
                Log in
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;