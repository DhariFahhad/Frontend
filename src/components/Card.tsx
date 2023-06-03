import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface Props {
  id: number;
  url: string;
  title: string;
  price: number;
  text: string;
}

function BasicExample({ id, url, title, price, text }: Props) {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={url} width={100} height={250} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className=" d-flex justify-content-between">
          <Card.Text className="text-break h-100">{title}</Card.Text>
          <Card.Text>{price}</Card.Text>
        </Card.Title>
        <Card.Text>{text}</Card.Text>
        <div className="mt-auto">
          <Button variant="primary rounded-pill" onClick={handleViewClick}>
            View
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
