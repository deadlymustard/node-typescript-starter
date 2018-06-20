import config from 'config';

import {App} from './app';
import {logger} from './logger';

const port = config.get('appConfig.port');

new App().app.listen(port || process.env.PORT, () => {
  logger.info(`Express server listening on port ${port}`);
});