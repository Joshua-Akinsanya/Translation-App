import ToastContext from "./ToastContext"
import ToastComponent from "./ToastComponent"
import { useState } from "react"

function ToastProvider({children}) {
	const [toasts, setToasts] = useState([])

	const open = (title='', details='', className='', timeout=3000) => {
		if(title.trim() === '' && details.trim() === '') return -1
		if(toasts.find(toast => toast.title.toLowerCase() === title.toLowerCase() )) return -1
		if(toasts.length > 2) return -1

		const id = Date.now()
		setToasts((toasts) => [...toasts, {id, title, details, className}])
		setTimeout(() => close(id), timeout)
		return id
	}

	const close = (id) => {
		setToasts(toasts => toasts.filter(toast => toast.id !== id))
	}
	
	return (
		<ToastContext value={{open, close}}>
			{children}
			<div className="space-y-2 fixed top-4 right-4">
				{toasts.map(toast => (
					<div key={toast.id} className="relative">
						<ToastComponent
							title={toast.title}
							details={toast.details}
							className={`${toast.className}`}
						>
							<button
								key={toast.id}
								className="absolute top-2 right-2 py-1 px-2 text-sm font-bold cursor-pointer"
								onClick={() => close(toast.id)}
							>x</button>
						</ToastComponent>
					</div>
				))}
			</div>
		</ToastContext>
	)
}

export default ToastProvider