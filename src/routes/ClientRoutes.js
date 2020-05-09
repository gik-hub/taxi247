import { Router } from 'express';

const router = new Router();

router.get('/', (req, res) => {
  res.send({messageg: 'Hello client'});
});

export default router;
