import express from 'express';
import router from './routes/router';

const app = express();

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});

app.use('/', router);
