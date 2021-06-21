import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';
import connectDB from './config/db.js';
import userRoutes from './routes/api/userRoutes.js'
import blogRoutes from './routes/api/blogRoutes.js';
import {
    notFound,
    errorHandler
} from './middleware/errorMiddleware.js';
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

app.use('/api/blogs', blogRoutes)
app.use('/api/users/', userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(chalk.green.bold(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)));
