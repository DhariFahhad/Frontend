import Header from "./components/Header";
import Landscape from "./components/Landscape";
import { QueryClient, QueryClientProvider } from "react-query";
import Card from "./services/FetchCard";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <Header />
        <Landscape />
        <Card />
      </QueryClientProvider>
    </>
  );
}

export default App;
