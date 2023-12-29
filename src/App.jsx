import reactLogo from './assets/react.svg'
import './App.css'
import Uploader from 'src/components/uploader/Uploader'
import CaseList from './components/cases/CaseList'
import {
  RecoilRoot
} from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
}) 
function App() {  
  return (
    <RecoilRoot>
      <QueryClientProvider client = {queryClient}>
          <a href="https://react.dev">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <h1>Gavel</h1>
        <Uploader />
        <CaseList />
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
