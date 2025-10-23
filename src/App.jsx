import TranslationContainer from './components/TranslationContainer'
import { heroImage } from './assets/images.js'
import logo from '../public/logo.svg'

function App() {
  return (
    <div className="font-display bg-contain bg-top bg-no-repeat min-h-screen py-23 bg-black text-white"
      style={{backgroundImage: `url('${heroImage}')`}}
    >
      <img src={logo} alt="Translate Logo"
        width="137" height="45"
        className='block mx-auto mb-13'
      />
      <TranslationContainer />
    </div>
  )
}

export default App
