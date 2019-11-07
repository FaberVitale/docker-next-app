import morgan from 'morgan';
import { Application } from 'express';

export default (expressApp: Application) => {
  expressApp.use(
    morgan('dev', {
      // We are only interested in `html` responses.
      skip: (req, res) => {
        const isNextPath =
          typeof req.baseUrl === 'string' && req.baseUrl.startsWith('/_next');

        return isNextPath || !/html/i.test(res.get('content-type'));
      },
    }),
  );
};
