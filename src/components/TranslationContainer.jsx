import { useState } from 'react'
import TranslationInput from "./TranslationInput"
import TranslationOutput from "./TranslationOutput"
import { LangPairsContext } from '../Contexts/LangPairsContext.js'
import langpairs from './langpairs'

function TranslationContainer() {
	const [inputText, setInputText] = useState('Hello, how are you?')
	const [translatedText, setTranslatedText] = useState('')

	const [translateFrom, setTranslateFrom] = useState('English')
	const [translateTo, setTranslateTo] = useState('French')

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
				
			<LangPairsContext value={{from: langpairs[translateFrom], to: langpairs[translateTo]}}>
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
					onSwitchText={handleSwitchText}
				/>
			</LangPairsContext>
		</div>
	)
}

export default TranslationContainer