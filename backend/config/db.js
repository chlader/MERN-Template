import chalk from 'chalk';
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        });

        console.log(chalk.underline.cyan(`MongoDB connected: ${conn.connection.host}`));
    } catch(error) {
        console.error(chalk.red.underline(`Error ${error.mesage}`));
        process.exit(1)
    }
};
// TODO:
// WORK ON SEEDER SCRIPT ITS NOT WOKRING 
// Use Chakra UI

export default connectDB;