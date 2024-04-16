import express from 'express';
import { createServer } from 'http';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import { appRoutes } from './routes';
import { errorMiddleware } from './middlewares/error';
import { connectDB } from './config/db';
import { handleExceptions } from './utils/logger';
import 'dotenv/config';

const PORT = process.env.PORT || 3001;
const app = express();

// Connect Database
connectDB();
handleExceptions();

app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', appRoutes);
app.use(errorMiddleware);

export const server = createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
