// utils/errorHandler.js
module.exports = (err, req, res, next) => {
    console.error(err.stack); // Log l'erreur pour le débogage

    // Format standard des erreurs en réponse
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
};