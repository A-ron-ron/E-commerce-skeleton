import { Router } from 'express';
import add from './user/add';

const user = Router();

// define the home page route
user.post('/', add);

// define the about route
user.get('/about', function (req, res) {
  res.send('About birds');
});

export default user;