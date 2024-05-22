import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
  res.send('Hi there! it is me... ');
});

export { router as signinRouter };
