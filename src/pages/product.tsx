import { useParams } from "react-router-dom";
import Product from "../services/FetchCardData";
import { QueryClient, QueryClientProvider } from "react-query";
function Page({}) {
  const { id } = useParams();
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Product id={id} />
      </QueryClientProvider>
    </>
  );
}

export default Page;
