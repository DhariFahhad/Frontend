import axios from "axios";
import { QueryClient, useQuery } from "react-query";
import Card from "../components/Card";

const Page = ({}) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "BfU4p51tNGHAJgFWN0pzXpTf4vRabnPGX5RfYFemn1MSBt8NmpUtLhQH",
    },
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://api.pexels.com/v1/search?query=perfume",
        config
      );
      return data.photos;
    },
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-4">
      {data?.map((item: any) => {
        return (
          <div className="col mb-4 ">
            <Card
              id={item.id}
              title={item.alt}
              text={item.photographer}
              url={item.src.medium}
              price={"$" + item.id / 1000}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Page;
