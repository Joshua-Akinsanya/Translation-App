import TranslationContainer from './components/TranslationContainer'
import heroImage from './assets/bg-images/hero_img.jpg'
import logo from '../public/logo.svg'

function App() {
  return (
    <div className="font-display bg-contain bg-top bg-no-repeat min-h-screen py-23 bg-black text-white"
      style={{backgroundImage: `url('${heroImage}')`}}
    >
      <img src={logo} alt="Translate Logo"
        className='block mx-auto mb-13'
      />
      <TranslationContainer />
    </div>
  )
}

export default App
