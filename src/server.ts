import express from 'express';
import cors from 'cors';
import { router } from './routes'
import { database } from './database';

import swaggerUi  from 'swagger-ui-express';
import swaggerDocs from './swagger.json';

const PORT = 3000;

const app = express()

app.use(cors())
app.use(express.json());
app.use(router)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

async function main() {
  await database.$connect();
  app.listen(PORT, () => console.log('The server is Running!'));
}
main();