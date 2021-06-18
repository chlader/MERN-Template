import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';
import connectDB from './config/db.js';

// setting up routes
// import books from './routes/api/routes';

dotenv.config();

// Set up a mongoDB database connection to a default db
connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
})

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(chalk.green.bold(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)));
