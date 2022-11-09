import { Router } from 'express';
import cors from 'cors';
import usersRouter from './users.routes';
import contactRouter from './contact.routes';
import authRouter from './auth.routes';

const routes = Router();

// const options: cors.CorsOptions = {
//   allowedHeaders: [
//     'Origin',
//     'X-Requested-With',
//     'Content-Type',
//     'Accept',
//     'X-Access-Token',
//   ],
//   credentials: true,
//   methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
//   origin: '*',
//   preflightContinue: false,
//   optionsSuccessStatus: 204,
// };

// routes.use(cors(options));
// routes.options('*', cors(options));

routes.use(cors());

routes.use('/users', usersRouter);
routes.use('/contact', contactRouter);
routes.use('/auth', authRouter);

export default routes;
