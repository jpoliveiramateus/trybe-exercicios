import express from 'express';
import router from './routes/PlantsRoutes';

const app = express();

app.use(express.json());

app.use('/plants', router);

export default app;