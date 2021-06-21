import mongoose from 'mongoose';
import User from './User.model.js'

const Schema = mongoose.Schema;

const BlogSchema = mongoose.Schema(
    {
        author: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
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