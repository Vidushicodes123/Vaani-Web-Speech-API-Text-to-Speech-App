# Vaani-Web-Speech-API-Text-to-Speech-App
A modern, responsive Text-to-Speech web application built using the Web Speech API, allowing users to convert written text into natural-sounding speech with customizable voices, speed, and pitch — all wrapped in a sleek purple-themed UI with enhanced UX interactions.

Key Features

🔊 Text to Speech conversion

🎙 Multiple voice options (system/browser dependent)

🎚 Adjustable speech rate

🎚 Adjustable pitch

🧮 Live character counter

🟢 Real-time speaking status indicator

🛑 Stop speech instantly

🎨 Purple-themed modern UI with hover & glow effects

📱 Fully responsive (mobile + desktop)

Technologies Used
Technology	
HTML5-->	Page structure
CSS3-->	Styling, animations, responsiveness
JavaScript (ES6)-->	App logic & event handling
Web Speech API-->	Speech synthesis

text-to-speech-app/


│
├── index.html        # Main HTML structure


├── style.css         # UI styling (purple theme)


├── app.js            # Speech logic & controls


├── README.md         # Documentation


└── screenshots/      # App screenshots


How the Interface Works (Technical Overview)

User inputs text in the textarea

Browser loads available voices asynchronously

Voices are populated using speechSynthesis.getVoices()

User selects:

Voice

Speed (rate)

Pitch

On clicking Speak:

SpeechSynthesisUtterance is created

Selected voice, rate, and pitch are applied

UI updates dynamically:

Status → Speaking / Ready / Stopped

Buttons enabled/disabled accordingly

▶️ How to Run Locally

Clone the repository or download ZIP

Open index.html in a modern browser

Enter text → select voice → click Speak

✅ No server
✅ No installation
✅ No build tools

🌍 Browser Compatibility
Browser	Support
Chrome	✅ Full
Edge	✅ Full
Firefox	⚠ Limited voices
Safari	⚠ Partial support

Voice availability depends on OS and browser engine.

⚠️ Known Limitations

Voice list differs across browsers

No offline voice support

Speech output cannot be downloaded as audio

Some voices load asynchronously (handled via onvoiceschanged)

❤️ Author

Vidushi Shandilya

Built with curiosity, late-night debugging, and purple aesthetics 💜

📜 License

This project is open-source and free for educational and personal use.

