import { Router } from 'express';
import user from './user';
import errorHandlerMiddleware from './errorHandler';

const api = Router();

api.get('/user', user);

api.get('/*', (req, res) => {
  if (req.path === '/') {
    res.json({
      enpoints: {
        user: '/api/user',
      },
    });
  } else {
    res.status(400);
    res.json({ status: 400, message: 'Unknown endpoint' });
  }
});

api.use(errorHandlerMiddleware);

export default api;
