import { useState, useContext } from 'react'
import TranslateButton from "./TranslateButton"
import SmallIconButton from "./SmallIconButton"
import { LangCodesContext } from '../Contexts/LangCodesContext.js'
import textToSpeech from '../textToSpeech.js'
import langCodes from './langCodes.js'
// import axios from 'axios'
import { speechIcon, copyIcon } from '../assets/images.js'

// https://mymemory.translated.net/doc/spec.php

function TranslationInput({inputText, setInputText, translateFrom, setTranslateFrom}) {
	// const baseURL = 'https://api.mymemory.translated.net/get?'

	// Tooltip is meant to show a feedback message when clicking buttons
	const [tooltip, setTooltip] = useState({
		hidden: true,
		message: ""
	})

	const translateFromOptions = ['Detect Language', 'English', 'French', 'Spanish']
	// Contains ISO language codes for 'from' language and 'to' language
	// Will be used when translating as codes are needed
	const langsFromTo = useContext(LangCodesContext)

	const handleInputChange = (event) => {
		const str = event.target.value
		if(str.length <= 500) {
			setInputText(event.target.value)
		}
	}

	const handleTranslation = () => {
		console.log('Translation works but commented out for now')
		console.log(langsFromTo)
		// axios.get(`${baseURL}q=${inputText}&langpair=en|fr`)
		// 	.then(response => console.log(response.data))
		// 	.catch(error => console.log(error))
	}

	const handleCopy = () => {
		window.navigator.clipboard.writeText(inputText)
		setTooltip({hidden: false, message: 'Copied'})
		
		setTimeout(() => {
			setTooltip({hidden: true, message: ''})
		}, 1500)
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
					<div className={`${ tooltip.hidden?'hidden':'' } absolute -top-full left-4 py-1 px-1.5 rounded-md bg-lightgray text-gray-800 text-xs font-bold`}>
						{ !tooltip.hidden && tooltip.message }
					</div>
				</div>
				<TranslateButton onClick={handleTranslation} />
			</div>
		</div>
	)
}

export default TranslationInput
