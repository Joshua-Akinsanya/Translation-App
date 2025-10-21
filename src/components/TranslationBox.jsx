import TranslateButton from "./TranslateButton"
import SmallIconButton from "./SmallIconButton"
import speechIcon from '../assets/icons/sound_max_fill.svg'
import copyIcon from '../assets/icons/copy.svg'

function TranslationBox() {
	let message = 'Hello how are you?'

	return (
		<div className="bg-black2-alpha-80 p-5.5 border-solid border-gray-700 border-2 rounded-3xl grow grid">
			<div
				className="mb-4 space-x-3"
			>
				<button type="button"
					className="cursor-pointer font-bold bg-gray-800 p-2 text-sm rounded-lg"
				>English</button>
				<button type="button"
					className="cursor-pointer font-bold p-2 text-sm text-gray-700 rounded-lg"
				>French</button>
			</div>
			<div>
				<textarea name="user-input" id=""
					className="resize-none block w-full min-h-50 outline-none pt-5.5 border-solid border-t-2 border-gray-800 text-sm font-bold"
				>
					{message}
				</textarea>
			</div>
			<div className="flex justify-between items-end flex-wrap">
				<div className="space-x-2">
					<SmallIconButton iconUrl={speechIcon} />
					<SmallIconButton iconUrl={copyIcon} />
				</div>
				<TranslateButton />
			</div>
		</div>
	)
}

export default TranslationBox