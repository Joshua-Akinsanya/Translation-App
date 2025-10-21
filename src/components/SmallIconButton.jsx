function SmallIconButton({iconUrl}) {
	return (
		<button className="cursor-pointer p-1.5 hover:bg-lightgray focus:bg-lightgray outline-none border-solid border-2 border-gray-700 rounded-lg transition-colors duration-200">
			<img src={iconUrl} alt="" />
		</button>
	)
}

export default SmallIconButton