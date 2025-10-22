import { useState } from 'react'
import TranslateButton from "./TranslateButton"
import SmallIconButton from "./SmallIconButton"
// import axios from 'axios'
import speechIcon from '../assets/icons/sound_max_fill.svg'
import copyIcon from '../assets/icons/copy.svg'

// https://mymemory.translated.net/doc/spec.php

function TranslationInput({inputText, setInputText, translateFrom, setTranslateFrom}) {
	// const baseURL = 'https://api.mymemory.translated.net/get?'

	const translateFromOptions = ['Detect Language', 'English', 'French', 'Spanish']

	const handleInputChange = (event) => {
		const str = event.target.value
		if(str.length <= 500) {
			setInputText(event.target.value)
		}
	}

	const handleTranslation = () => {
		console.log('Translation works but commented out for now')
		// axios.get(`${baseURL}q=${inputText}&langpair=en|fr`)
		// 	.then(response => console.log(response.data))
		// 	.catch(error => console.log(error))
	}

	const [tooltip, setTooltip] = useState({
		hidden: true,
		message: ""
	})

	const handleCopy = () => {
		window.navigator.clipboard.writeText(inputText)
		setTooltip({hidden: false, message: 'Copied'})
		
		setTimeout(() => {
			setTooltip({hidden: true, message: ''})
		}, 1500)
	}

	return (
		<div className="bg-black2-alpha-80 p-5.5 border-solid border-gray-700 border-2 rounded-3xl flex-1 grid">
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
					<SmallIconButton iconUrl={speechIcon} />
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
