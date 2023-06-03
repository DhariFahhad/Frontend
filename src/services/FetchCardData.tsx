import axios from "axios";
import { useQuery } from "react-query";
import Header from "../components/Header";
import { Container } from "react-bootstrap";

const Page = ({ id }: any) => {
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
        `https://api.pexels.com/v1//photos/${id}`,
        config
      );
      return data;
    },
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <>
      <Header />
      <Container style={{ backgroundColor: "gray" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-container">
                <img
                  src={data["src"]["original"]}
                  alt="Product"
                  className="img-fluid"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text">
                <h2> {data["alt"]}</h2>
                <p>
                  {" "}
                  {data["photographer"]}
                  {data["photographer_url"]}
                </p>
                <p>{"$" + data["id"] / 1000}</p>
              </div>
              <div className="row mt-auto">
                <div className="col">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
                <div className="col">
                  <button className="btn btn-primary">Add to the Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Page;
