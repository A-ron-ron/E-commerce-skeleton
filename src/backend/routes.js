import { Router } from 'express';
import user from './routes/user';


const routes = Router();

routes.use(function timeLog (req, res, next) {
    console.log('API Interaction Time: ', Date.now());
    next();
});

routes.use('/user', user);


export default routes;
