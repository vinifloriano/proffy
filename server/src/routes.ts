import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionControler from './controllers/ConnectionsController';


const routes = express.Router();
const classesControllers = new  ClassesController();
const connectionControler = new  ConnectionControler();

routes.get('/', (request, response) => {
    return response.json({message: 'Hello world'})
});

routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.post('/connections', connectionControler.create);
routes.get('/connections', connectionControler.index);


export default routes;
