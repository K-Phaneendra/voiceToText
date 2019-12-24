import { spawn } from 'child_process';

export const run_voice_to_text_Engine = async () => {
  const process = spawn('python', ['engines\\voice-to-text\\index.py']);

  const stdout = await new Promise(resolve => {
    process.stdout.on('data', (data) => {
      console.log('data- - -- ', data)
      // res.send(data.toString());
      resolve(data.toString())
    })
  })

  // const stderr = await new Promise(resolve => {
  //   process.stderr.on('data', (data) => {
  //     console.error(`stderr: ${data}`);
  //     resolve(data);
  //   });
  //   resolve(null)
  // })

  process.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

  return {
    stdout,
    // stderr
  }
}