export default class CustomError extends Error {

  constructor(message: string, status: number) {
    super(message);
  }
}

export const errorHandler = (err: any, req: any, res: any, next: any) => {
  let statusCode = err.status || 500;
  let errorMessage = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    error: { message: errorMessage },
  });

  next();
};

