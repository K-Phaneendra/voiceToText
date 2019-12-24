import { Router } from 'express';

import Answers from '../controllers/Answers';
import VoiceChat from '../controllers/VoiceChat';

const router = new Router();

router.use('/answers', Answers);
router.use('/voice-chat', VoiceChat);

export default router;
