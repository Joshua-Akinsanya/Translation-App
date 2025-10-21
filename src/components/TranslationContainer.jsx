import TranslationBox from "./TranslationBox"

function TranslationContainer() {
	return (
		<div className="grid md:flex gap-4 mx-6 lg:mx-18">
			<TranslationBox />
			<TranslationBox />
		</div>
	)
}

export default TranslationContainer