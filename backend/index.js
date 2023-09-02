const cors = require('cors');
const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { run } = require('./database/db');
const User = require('./database/schemas/user');

const app = express();
const port = 3000;

app.use(
    '/vite',
    createProxyMiddleware({
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true,
    })
);
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.get('/', (req, res) => {
    res.send('success')
});

app.post('/newUser', async (req, res) => {
    const userData = req.body;
    console.log('request body:', userData)
    
    const newUser = new User(userData);
    await newUser.save();
    console.log('User created:', newUser)

    res.send('success').status(200);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});