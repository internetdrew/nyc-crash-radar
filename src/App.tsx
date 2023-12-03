import { Navbar, Header, CrashFeed } from './components';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Header />
        <CrashFeed />
      </QueryClientProvider>
    </>
  );
}

export default App;
