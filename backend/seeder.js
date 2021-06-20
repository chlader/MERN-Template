import users from './data/users.js';
import blogs from './data/blogs.js';
import connectDB from './config/db.js';
import User from './models/User.model';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import Blog from './models/Blog.model';
import chalk from 'chalk';

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await User.deleteMany();
        await Blog.deleteMany();

        const createdUsers = await User.insertMany(users);

        // Can create admin here

        const sampleBlogs = blogs.map((blog) => {
            return {...blog};
        });

        await Blog.insertMany(sampleBlogs);

        console.log(chalk.green.inverse('Data imported!'));
        process.exit();
    } catch (error) {
        console.error(chalk.red.inverse(`${error}`));
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await User.deleteMany();
        await Blog.deleteMany();

        console.log(chalk.red.inverse('Data destroyed!'));
        process.exit(1);
    } catch (error) {
        console.error(chalk.red.inverse(`${error}`));
        process.exit(1);
    }
};

if (process.arv[2] === '-d') {
    destroyData();
} else {
    importData();
}