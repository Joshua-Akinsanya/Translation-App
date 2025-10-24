function ToastComponent({title, details, className='', children}) {
	return (
		<div className={`${className} p-4 border-solid border-2 border-gray-700 rounded-xl bg-gray-800 text-white`}>
			<div className="mr-4">
				{/* Margin is to leave space for close button */}
				<h1 className="font-bold">{title}</h1>
				<p className="text-sm">{details}</p>
				{children}
			</div>
		</div>
	)
}

export default ToastComponent