const fala = document.getElementById('fala')
const synth = window.speechSynthesis
let voices = []
function falar(){
    if(!synth.speaking){
        voices = synth.getVoices();
        console.log(voices)
        dialogo = new SpeechSynthesisUtterance(fala.value)
        dialogo.voice = voices[0]
        console.log(document.getElementById('rate').value)
        dialogo.pitch = document.getElementById('pitch').value
        dialogo.rate = document.getElementById('rate').value
        synth.speak(dialogo)
    }
    else{
        synth.cancel()
        
    }

}