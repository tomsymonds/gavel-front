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
import { ChakraProvider } from '@chakra-ui/react';


function App() {  
  return (
    <RecoilRoot>
      <QueryClientProvider client = {queryClient}>
        <ChakraProvider>
            <h1>Gavel</h1>
          <Uploader />
          <CaseList />
        </ChakraProvider>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
