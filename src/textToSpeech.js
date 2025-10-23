function textToSpeech (text, languageCode = null) {
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    const voices = window.speechSynthesis.getVoices()
    if (languageCode) {
        const voice = voices.find(v => v.lang.toLowerCase().includes(languageCode))
        voice && (utterance.voice = voice)
    }
    window.speechSynthesis.speak(utterance)
}

export default textToSpeech