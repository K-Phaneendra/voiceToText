import { Router } from 'express';
import { getTextFromVoice } from './controller';

const router = new Router();

router.get('/getTextFromVoice', getTextFromVoice);

export default router;
