import speech_recognition as sr

r = sr.Recognizer()
a = sr.AudioFile("C:\\myDrive\\projects\\voiceToText\\node\\engines\\voice-to-text\\sampleVoice1.wav")
with a as source:
  audio = r.record(source)

# print('audio===', audio)
text = r.recognize_google(audio)
print(text)

# file1 = open(r"C:\myDrive\projects\PythonApps\audio_to_text\textOutput.txt", "a")
# file1.writelines(text)
# file1.close()
