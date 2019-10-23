import * as express from 'express';

import { PORT } from './constants/application';

const app = express();

app.use('/', (req: express.Request, res: express.Response) => {
  res.json({ status: 200 });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on ${PORT} port test`);
});

export default app;
