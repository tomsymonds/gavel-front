import reactLogo from './assets/react.svg'
import './App.css'
import Uploader from 'src/components/uploader/Uploader'
import CaseList from './components/case/CaseList'
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
      <CaseList />
    </>
  )
}

export default App
