import express from 'express';
import next from 'next';
import api from './api';
import { IS_DEV, PORT } from './utils/environment';

const clientApp = next({ dev: IS_DEV, dir: './app' });
const handle = clientApp.getRequestHandler();
const app = express();

clientApp.prepare().then(() => {
  if (IS_DEV) {
    /* eslint-disable @typescript-eslint/no-var-requires */
    const {
      default: addDevelopmentMiddlewares,
    } = require('./configureDevelopmentMiddlewares');
    /* eslint-enable @typescript-eslint/no-var-requires */

    addDevelopmentMiddlewares(app);
  }

  app.use('/api', api);

  app.get('/*', (req, res) => handle(req, res));

  const server = app.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });

  if (IS_DEV) {
    // @see: https://github.com/remy/nodemon#controlling-shutdown-of-your-script
    process.once('SIGUSR2', () => {
      server.close((erroWhileClosing) => {
        if (erroWhileClosing) {
          throw erroWhileClosing;
        }
        console.log(`restarting... `);
        process.kill(process.pid, 'SIGUSR2');
      });
    });
  }
});
