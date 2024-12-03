// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import connectDB from './config/db.js';
// import authRoutes from './routes/authRoutes.js';

// dotenv.config();

// connectDB();

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use('/api', authRoutes);

// // app.get('/', (req, res) => {
// //     res.send("Hello World!!");
// // })

// const PORT = process.env.PORT;

// app.listen(PORT, () => {
//     console.log(`App is running on: http://localhost:${PORT}`);
// });



import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

connectDB();

const app = express();

// app.use(cors({
//     origin: process.env.CLIENT_URL || 'http://localhost:3000',
// }));

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'], // Allow multiple origins if needed
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // if you need to include cookies in requests
}));

app.use(express.json());

app.use('/api', authRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Server is running!" });
});

const PORT = process.env.PORT || 5000;

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong on the server' });
});

app.use((req, res, next) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
    res.setHeader("Cross-Origin-Embedder-Policy", "unsafe-none");
    next();
});

app.listen(PORT, () => {
    console.log(`App is running on: http://localhost:${PORT}`);
});
