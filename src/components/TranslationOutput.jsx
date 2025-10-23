import { useState } from 'react'
import SmallIconButton from "./SmallIconButton"
import textToSpeech from '../textToSpeech.js'
import { speechIcon, copyIcon, switchIcon } from '../assets/images.js'
import langCodes from './langCodes.js'

// https://mymemory.translated.net/doc/spec.php

function TranslationOutput({translatedText, setTranslatedText, translateTo, setTranslateTo, onSwitchText, loading, error}) {
	// Tooltip is meant to show a feedback message when clicking buttons
	const [tooltips, setTooltips] = useState({
		hidden: true,
		message: ""
	})

	const translateToOptions = ['English', 'French', 'Spanish']

	const handleInputChange = (event) => {
		const str = event.target.value
		if(str.length <= 500) {
			setTranslatedText(event.target.value)
		}
	}

	const handleCopy = () => {
		window.navigator.clipboard.writeText(translatedText)
		setTooltips({hidden: false, message: 'Copied'})
		
		setTimeout(() => {
			setTooltips({hidden: true, message: ''})
		}, 1500)
	}

	const handlePlaySpeech = () => {
		const code = langCodes[translateTo]
		textToSpeech(translatedText, code)
	}

	const displayedText = () => {
		if(loading) {
			return ('Translating...')
		}
		if(error) {
			return error
		}
		return translatedText
	}
	
	return (
		<div className="bg-black-alpha-80 p-5.5 border-solid border-gray-700 border-2 rounded-3xl flex-1 flex flex-col"> 
		{/* flex and flex-col above help align the top and bottom icons with the left big box */}
			<div className="mb-4 space-x-3 flex items-center flex-wrap">
				{translateToOptions.map(option => {
					return (
						<button
							key={option}
							type="button"
							className={`${option === translateTo ? 'bg-gray-800':'text-gray-700' } cursor-pointer font-bold py-2 px-3 text-sm rounded-lg transition-colors duration-200`}
							onClick={() => setTranslateTo(option) }
						>{option}</button>
					)
				})}

				<SmallIconButton className="ml-auto p-1" iconUrl={switchIcon} onClick={onSwitchText} />
			</div>
			<div className='relative mb-3 border-solid border-t-2 border-gray-800'>
				<textarea name="user-input" id=""
					value={displayedText()}
					onChange={handleInputChange}
					className={`resize-none block w-full min-h-46 outline-none mt-5.5 ${error?'text-red-400':''} ${loading?'text-gray-700':''} text-sm font-bold`}
				>
				</textarea>
			</div>
			<div className="mt-auto flex justify-between items-end flex-wrap">
				<div className="relative space-x-2">
					<SmallIconButton iconUrl={speechIcon} onClick={handlePlaySpeech} />
					<SmallIconButton iconUrl={copyIcon} onClick={handleCopy} />
					<div className={`${ tooltips.hidden?'hidden':'' } absolute -top-full left-4 py-1 px-1.5 rounded-md bg-lightgray text-gray-800 text-xs font-bold`}>
						{ !tooltips.hidden && tooltips.message }
					</div>
				</div>
			</div>
		</div>
	)
}

export default TranslationOutput
