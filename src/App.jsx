import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import MainUI from './components/mainUI/MainUI';
import { ChakraProvider } from '@chakra-ui/react';


function App() {  
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    }
  }) 
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
