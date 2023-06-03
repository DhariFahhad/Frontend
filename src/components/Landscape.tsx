import { Card, Button } from "react-bootstrap";
function ImgOverlayExample() {
  return (
    <Card className="bg-dark text-white mb-4 " style={{ minHeight: "300px" }}>
      <Card.Img src="" alt="" />
      <Card.ImgOverlay className="p-5 d-flex flex-column">
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
        <div className="mt-auto">
          <Button variant="primary">Go somewhere</Button>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;
