"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
class CustomError extends Error {
    constructor(message, status) {
        super(message);
    }
}
exports.default = CustomError;
const errorHandler = (err, req, res, next) => {
    let statusCode = err.status || 500;
    let errorMessage = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        error: { message: errorMessage },
    });
    next();
};
exports.errorHandler = errorHandler;
