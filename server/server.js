import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import router from './routes/router';

// Set up the express app
const app = express();

const port = process.env.PORT || 3000;

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 
app.use('/', router);
app.use(express.static(path.join(__dirname, '/template')));

// Open port and listen from it 
app.listen(port, () => {
  console.log('Listening on port 3000!');
});
