import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
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
    <QueryClientProvider client = {queryClient}>
      <ChakraProvider>
          <MainUI />
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
