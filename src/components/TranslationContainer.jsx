import { useState } from 'react'
import TranslationInput from "./TranslationInput"
import TranslationOutput from "./TranslationOutput"

function TranslationContainer() {
	const [inputText, setInputText] = useState('Hello, how are you?')
	const [translatedText, setTranslatedText] = useState('')

	const [translateFrom, setTranslateFrom] = useState('English')
	const [translateTo, setTranslateTo] = useState('French')

	return (
		<div className="grid md:flex gap-4 mx-6 lg:mx-18">
			<TranslationInput
				inputText={inputText}
				setInputText={setInputText}
				translateFrom={translateFrom}
				setTranslateFrom={setTranslateFrom}
			/>
			<TranslationOutput
				translatedText={translatedText}
				setTranslatedText={setTranslatedText}
				translateTo={translateTo}
				setTranslateTo={setTranslateTo}
			/>
		</div>
	)
}

export default TranslationContainer