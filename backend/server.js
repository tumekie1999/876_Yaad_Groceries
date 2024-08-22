require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');


const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// PostgreSQL client setup
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Sample endpoint to insert data with password hashing
app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Hash the password before storing it in the database
        const saltRounds = 10; // You can adjust the number of salt rounds
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Insert the user into the database with the hashed password
        const result = await pool.query(
            'INSERT INTO shopping (name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, hashedPassword]
        );

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Sample endpoint to log in a user
app.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Retrieve the user by email
        const userQuery = await pool.query('SELECT * FROM shopping WHERE email = $1', [email]);
        const user = userQuery.rows[0];


        if (!user) {
            // If the user does not exist
            return res.status(400).json({ error: 'Invalid email' });
        }

        // // 2. Compare the provided password with the stored password
        // const isMatch = await bcrypt.compare(password.trim(), user.password.trim());
        // console.log(isMatch);

        if (password!=user.password) {
            // If the password does not match
            return res.status(400).json({ error: 'Invalid password' });
        }

        // 3. Generate a JWT token (optional, for authentication purposes)
        const token = jwt.sign(
            { user_id: user.id, email: user.email },
            'your_jwt_secret', // Replace with your secret key
            { expiresIn: '1h' }
        );

        // Return success response with token
        res.json({ token, user: { id: user.id, name: user.name, email: user.email } });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
