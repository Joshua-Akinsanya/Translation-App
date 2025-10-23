// Purely for test purposes do not include in final version
function SpeechComponent() {
	const utterance = new SpeechSynthesisUtterance('Learning how to React!')

	const speak = () => {
		const voices = window.speechSynthesis.getVoices()
		utterance.pitch = 1
		utterance.rate = 1
		utterance.volume = 1
		console.log(voices[0])
		console.log(utterance)
		window.speechSynthesis.speak(utterance)
	}

	const cancel = () => {
		console.log(utterance)
		window.speechSynthesis.cancel()
	}

	return (
		<div className="space-x-4">
			<button className="py-2 px-3 bg-gray-700"
				onClick={speak}
			>Speak
			</button>
			<button className="py-2 px-3 bg-gray-700"
				onClick={cancel}
			>Cancel
			</button>
		</div>
	)
}

export default SpeechComponent