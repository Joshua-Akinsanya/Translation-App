import { useState } from 'react'
import TranslationInput from "./TranslationInput"
import TranslationOutput from "./TranslationOutput"
import { LangCodesContext } from '../Contexts/LangCodesContext.js'
import langCodes from './langCodes'

function TranslationContainer() {
	const [inputText, setInputText] = useState('Hello, how are you?')
	const [translatedText, setTranslatedText] = useState('')

	const [translateFrom, setTranslateFrom] = useState('English')
	const [translateTo, setTranslateTo] = useState('French')

	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)

	const handleSwitchText = () => {
		setInputText(translatedText)
		setTranslatedText(inputText)
		setTranslateFrom(translateTo)
		setTranslateTo(translateFrom)
	}

	return (
		<div className="grid md:flex gap-4 mx-6 lg:mx-18">
			{/* Maybe Context wasn't needed here since it is being used directly in TranslationInput Component
				but I'll keep just to practice how to use it */}
				
			<LangCodesContext value={{from: langCodes[translateFrom], to: langCodes[translateTo]}}>
				<TranslationInput
					inputText={inputText}
					setInputText={setInputText}
					translateFrom={translateFrom}
					setTranslateFrom={setTranslateFrom}
					setTranslatedText={setTranslatedText}
					setLoading={setLoading}
					setError={setError}
				/>
				<TranslationOutput
					translatedText={translatedText}
					setTranslatedText={setTranslatedText}
					translateTo={translateTo}
					setTranslateTo={setTranslateTo}
					onSwitchText={handleSwitchText}
					loading={loading}
					error={error}
				/>
			</LangCodesContext>
		</div>
	)
}

export default TranslationContainer