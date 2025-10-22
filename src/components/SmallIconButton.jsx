function SmallIconButton({iconUrl, className="", onClick=null}) {
	return (
		<button 
			type="button"
			className={`${className} cursor-pointer p-1.5 hover:bg-lightgray focus:bg-lightgray outline-none border-solid border-2 border-gray-700 rounded-lg transition-colors duration-200`}
			onClick={onClick ?? (() => {})}
		>
			<img src={iconUrl} alt="" />
		</button>
	)
}

export default SmallIconButton