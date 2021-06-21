import asyncHandler from 'express-async-handler';
import User from '../models/User.model.js';
import generateToken from '../utils/generateToken.js';

// @desc Authenticate user and get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            dateJoined: user.dateJoined,
            token: generateToken(user._id)
        })
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
})

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            dateJoined: user.dateJoined,
        })
    } else {
        res.status(404);
        throw new Error('Invalid email or password');
    }
})

// @desc Register a new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password, dateJoined } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        username,
        email,
        password,
        dateJoined
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            dateJoined: user.dateJoined,
            token: generateToken(user._id),
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
})

export { authUser, getUserProfile, registerUser };