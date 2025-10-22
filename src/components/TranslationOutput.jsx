import { useState } from 'react'
import SmallIconButton from "./SmallIconButton"
import speechIcon from '../assets/icons/sound_max_fill.svg'
import copyIcon from '../assets/icons/copy.svg'
import switchIcon from '../assets/icons/horizontal_top_left_main.svg'

// https://mymemory.translated.net/doc/spec.php

function TranslationOutput({translatedText, setTranslatedText, translateTo, setTranslateTo}) {
	const translateToOptions = ['English', 'French', 'Spanish']
	
	const handleInputChange = (event) => {
		const str = event.target.value
		if(str.length <= 500) {
			setTranslatedText(event.target.value)
		}
	}

	const [tooltips, setTooltips] = useState({
		hidden: true,
		message: ""
	})

	const handleCopy = () => {
		window.navigator.clipboard.writeText(translatedText)
		setTooltips({hidden: false, message: 'Copied'})
		
		setTimeout(() => {
			setTooltips({hidden: true, message: ''})
		}, 1500)
	}
	
	return (
		<div className="bg-black-alpha-80 p-5.5 border-solid border-gray-700 border-2 rounded-3xl flex-1 grid">
			<div className="mb-4 space-x-3 flex items-center">
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
				
				<SmallIconButton className="ml-auto p-1" iconUrl={switchIcon} />
			</div>
			<div className='relative mb-3 border-solid border-t-2 border-gray-800'>
				<textarea name="user-input" id=""
					value={translatedText}
					onChange={handleInputChange}
					className="resize-none block w-full min-h-46 outline-none mt-5.5 text-sm font-bold"
				>
				</textarea>
			</div>
			<div className="flex justify-between items-end flex-wrap">
				<div className="relative space-x-2">
					<SmallIconButton iconUrl={speechIcon} />
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
