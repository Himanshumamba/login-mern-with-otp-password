import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';
import router from './router/route.js';
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');
const PORT = 3500;
app.get('/', (req, res) => {
  res.status(201).json('Home Get request');
});

//api routes
app.use('/api', router);

connect()
  .then(() => {
    try {
      app.listen(PORT, () => {
        console.log(` connected to port ${PORT}`);
      });
    } catch (error) {
      console.log('cannot connect to MongoDb');
    }
  })
  .catch((error) => {
    console.log('invalid db connection');
  });
