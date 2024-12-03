import User from "../models/User.js";
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';

const JWT_SECRET = process.env.JWT_SECRET;
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const generateToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET, { expiresIn: '1hr' });
};

export const registerUser = async (req, res) => {
    try {
        const { email, password, confirmPassword } = req.body;

        if (!email || !password || !confirmPassword) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({ email, password, confirmPassword });

        res.status(201).json({ 
            token: generateToken(user._id), 
            message: 'User registered successfully',
            user: {
                id: user._id,
                email: user.email
            }
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const user = await User.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            res.json({ 
                token: generateToken(user._id), 
                message: 'Login successful',
                user: {
                    id: user._id,
                    email: user.email
                }
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const googleAuth = async (req, res) => {
    try {
        const { token } = req.body;

        // Verify Google token
        const ticket = await googleClient.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        });

        const payload = ticket.getPayload();
        const { email, sub: googleId, name, picture } = payload;

        // Check if user exists
        let user = await User.findOne({ email });

        if (user) {
            // Update existing user's Google ID if not set
            if (!user.googleId) {
                user.googleId = googleId;
                user.name = name;
                user.picture = picture;
                await user.save();
            }
        } else {
            // Create new user
            user = await User.create({
                email,
                googleId,
                name,
                picture
            });
        }

        res.json({
            token: generateToken(user._id),
            message: 'Google sign-in successful',
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                picture: user.picture
            }
        });
    } catch (error) {
        console.error('Google auth error:', error);
        res.status(500).json({ message: 'Google authentication failed' });
    }
};