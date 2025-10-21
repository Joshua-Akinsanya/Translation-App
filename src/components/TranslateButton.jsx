import alfa from '../assets/icons/sort_alfa.svg'

function TranslateButton() {
	return (
		<button
			className="bg-deepblue hover:bg-blue-600 focus:bg-blue-600 active:scale-90 outline-none px-5.5 py-3 border-solid border-2 border-skyblue rounded-xl space-x-3 transition-transform-colors duration-200 cursor-pointer"
		>
			<img src={alfa} alt="" className='inline-block' />
			<span className='inline-block text-sm font-bold'>Translate</span>
		</button>
	)
}

export default TranslateButton