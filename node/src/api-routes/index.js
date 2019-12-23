import { Router } from 'express';

import Answers from '../controllers/Answers';

const router = new Router();

router.use('/answers', Answers);

export default router;
