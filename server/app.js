const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const errorHandler = require('./utils/errorHandler');
const config = require('./config/config');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', routes);

// Error handling
app.use(errorHandler);

// Start server
app.listen(config.port, () => {
    console.log(`✅ Server running on http://localhost:${config.port}`);
});