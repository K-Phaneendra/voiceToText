import { SEND } from '../response';
import { run_voice_to_text_Engine } from './handlers';

export const getTextFromVoice = async (req, res, next) => {
  // const audio = sampleVoice1;

  const voiceToText = await run_voice_to_text_Engine()
  
  console.log('voiceToText - = =', voiceToText)

  SEND(res, false, {
    voiceToText
  });
};
