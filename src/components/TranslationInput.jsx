import { useContext } from 'react'
import TranslateButton from "./TranslateButton"
import SmallIconButton from "./SmallIconButton"
import { LangCodesContext } from '../Contexts/LangCodesContext.js'
import textToSpeech from '../functions/textToSpeech.js'
import langCodes from './langCodes.js'
import axios from 'axios'
import { speechIcon, copyIcon } from '../assets/images.js'
import useToast from './Toast/useToast.js'

// https://mymemory.translated.net/doc/spec.php

function TranslationInput({inputText, setInputText, translateFrom, setTranslateFrom, setTranslatedText, setLoading, setError }) {
	const baseURL = 'https://api.mymemory.translated.net/get?'

	const translateFromOptions = ['Detect Language', 'English', 'French', 'Spanish']
	// Contains ISO language codes for 'from' language and 'to' language
	// Will be used when translating as codes are needed
	const langsFromTo = useContext(LangCodesContext)
	
	// Use Toast Context to access toast functionality
	const toast = useToast()

	const handleInputChange = (event) => {
		const str = event.target.value
		if(str.length <= 500) {
			setInputText(event.target.value)
		}
	}

	const handleTranslation = () => {
		setError(null)
		setLoading(true)
		axios.get(`${baseURL}q=${inputText}&langpair=${langsFromTo.from}|${langsFromTo.to}`)
			.then(response => {
				setTranslatedText(response.data.responseData.translatedText)
			})
			.catch(error => {
				console.error(error.message)
				setError('An error occurred')
			})
			.finally(() => {
				setLoading(false)
			})
	}

	const handleCopy = () => {
		window.navigator.clipboard.writeText(inputText)
		toast.open('Copied', 'Copied to clipboard successfully')
	}

	const handlePlaySpeech = () => {
		const code = langCodes[translateFrom]
		textToSpeech(inputText, code)
	}

	return (
		<div className="bg-black2-alpha-80 p-5.5 border-solid border-gray-700 border-2 rounded-3xl flex-1">
			<div className="mb-4 space-x-3">
				{translateFromOptions.map(option => {
					return (
						<button
							key={option}
							type="button"
							className={`${option === translateFrom ? 'bg-gray-800':'text-gray-700' } cursor-pointer font-bold py-2 px-3 text-sm rounded-lg transition-colors duration-200`}
							onClick={() => setTranslateFrom(option)}
						>{option}</button>
					)
				})}
			</div>
			<div className='relative mb-3 border-solid border-t-2 border-gray-800'>
				<textarea name="user-input" id=""
					value={inputText}
					onChange={handleInputChange}
					className="resize-none block w-full min-h-46 outline-none mt-5.5 text-sm font-bold"
				>
				</textarea>
				<p className='text-xs text-lightgray text-right'>{inputText.length}/500</p>
			</div>
			<div className="flex justify-between items-end flex-wrap">
				<div className="relative space-x-2">
					<SmallIconButton iconUrl={speechIcon} onClick={handlePlaySpeech} />
					<SmallIconButton iconUrl={copyIcon} onClick={handleCopy} />
				</div>
				<TranslateButton onClick={handleTranslation} />
			</div>
		</div>
	)
}

export default TranslationInput
