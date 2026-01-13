
const synth = window.speechSynthesis;
let voices=[];
const voiceSelect = document.getElementById("voice-select");

function loadVoices() {
    voices = synth.getVoices();
    if (!voices.length) return;

    voiceSelect.innerHTML = "";

    voices.forEach((voice, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });

    console.log(`Loaded ${voices.length} voices`);
}



const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

//counter
function updateCharCount() {
    const count = textInput.value.length;
    charCount.textContent = count;
}
textInput.addEventListener("input", updateCharCount);
function init() {
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;

    speakBtn.addEventListener("click", speak);
    stopBtn.addEventListener("click", stop);

    updateCharCount();
    stopBtn.disabled = true;
}
const speakBtn = document.getElementById("speak-btn");
const stopBtn = document.getElementById("stop-btn");
const speedSlider = document.getElementById("speed-slider");
const pitchSlider = document.getElementById("pitch-slider");
const status = document.getElementById("status");
const statusText = document.getElementById("status-text");

function speak() {
    if (synth.speaking) {
        synth.cancel();
    }

    const text = textInput.value.trim();
    if (!text) {
        alert("Please enter some text to speak");
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);

    const selectedVoiceIndex = voiceSelect.value;
    if (selectedVoiceIndex !== "") {
        utterance.voice = voices[selectedVoiceIndex];
    }

    utterance.rate = parseFloat(speedSlider.value);
    utterance.pitch = parseFloat(pitchSlider.value);
    utterance.volume = 1.0;

    utterance.onstart = () => {
        status.classList.add("speaking");
        statusText.textContent = "Speaking...";
        speakBtn.disabled = true;
        stopBtn.disabled = false;
    };

    utterance.onend = () => {
        status.classList.remove("speaking");
        statusText.textContent = "Ready";
        speakBtn.disabled = false;
        stopBtn.disabled = true;
    };

    utterance.onerror = (event) => {
        console.error("Speech synthesis error:", event);
        statusText.textContent = "Error occurred";
        speakBtn.disabled = false;
        stopBtn.disabled = true;
    };

    synth.speak(utterance);
}
function stop() {
    synth.cancel();
    status.classList.remove("speaking");
    statusText.textContent = "Stopped";
    speakBtn.disabled = false;
    stopBtn.disabled = true;
}
document.addEventListener("DOMContentLoaded", init);
