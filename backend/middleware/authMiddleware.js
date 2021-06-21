import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/User.model.js';

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')
            const decoded = jwt.verify(token[1], process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error('NOT AUTHORIZED - TOKEN FAILED')
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('Not authorized - no token');
    }

    next();
})

export { protect };