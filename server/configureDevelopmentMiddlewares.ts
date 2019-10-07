import morgan from 'morgan';
import { Application } from 'express';

export default (expressApp: Application) => {
  expressApp.use(
    morgan('dev', {
      // We are only interested in `html` responses.
      skip: (req, res) => {
        return (
          req.baseUrl.startsWith('/_next') ||
          !/html/i.test(res.get('content-type'))
        );
      },
    }),
  );
};
