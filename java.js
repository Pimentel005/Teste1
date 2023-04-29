let textarea = document.querySelector('#textarea')
let voices = document.querySelector('#voices')
let button = document.querySelector('#fala')
let selectedVoice = 0;


window.speechSynthesis.addEventListener('voiceschanged' , () => {
    let voicesList = window.speechSynthesis.getVoices();
    for(let i in voicesList) {
        let optionEL = document.createElement('option');
        optionEL.setAttribute('value', i);
        optionEL.innerText = voicesList[i].name;
        voices.appendChild(optionEL)

    }
});

button.addEventListener("click", () => {
    if(textarea.value !== '') {
        let voicesList = window.speechSynthesis.getVoices();
        let ut = new SpeechSynthesisUtterance(textarea.value);
        ut.voice = voicesList[selectedVoice];
        window.speechSynthesis.speak(ut);
    }
})
voices.addEventListener('change', () =>  {
    selectedVoice = parseInt(voices.value)
})