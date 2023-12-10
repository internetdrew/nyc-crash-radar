import { ReactNode } from 'react';
import { Navbar } from '@components';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

interface AppProps {
  children: ReactNode;
}

function App({ children }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      {children}
    </QueryClientProvider>
  );
}

export default App;
