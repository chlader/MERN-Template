import mongoose from 'mongoose';
import UserSchema from './User.model'

const BlogSchema = mongoose.Schema(
    {
        author: { UserSchema },
        title: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const Blog = mongoose.model('Blog', BlogSchema);

export default Blog;