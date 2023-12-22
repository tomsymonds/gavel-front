import reactLogo from './assets/react.svg'
import './App.css'
import Uploader from 'src/components/uploader/Uploader'
function App() {  

  return (
    <>
      <div>
        <a href="https://react.dev">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Gavel</h1>
      </div>
      <Uploader />
      
    </>
  )
}

export default App
