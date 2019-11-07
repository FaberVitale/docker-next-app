import { ErrorRequestHandler } from 'express';
import { IS_PROD } from '../utils/environment';

// https://expressjs.com/en/guide/error-handling.html
const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  const responsePayload = {
    status: 500,
    message: 'an error has occurred',
  };

  if (!IS_PROD) {
    responsePayload.message = err.message;
  }

  res.status(500);
  res.json(responsePayload);
};

export default errorHandlerMiddleware;
