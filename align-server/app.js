const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');

// IMPORT ROUTES
const apiRoutes = require('./routes/apiRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(helmet()); 
app.use(morgan('dev'));
app.use(express.json());

// USE ROUTES
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
});