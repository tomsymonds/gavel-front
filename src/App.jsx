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
import MainUI from './components/core/MainUI'
import { ChakraProvider } from '@chakra-ui/react';


function App() {  
  return (
    <RecoilRoot>
      <QueryClientProvider client = {queryClient}>
        <ChakraProvider>
            <MainUI />
        </ChakraProvider>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
