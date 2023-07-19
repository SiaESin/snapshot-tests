import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://wallpapers.com/images/hd/cute-cartoon-black-girl-wondering-l0iicod363mm7wmy.jpg" width="300px" />
      <Card.Body>
        <Card.Title>SiaSparkles</Card.Title>
        <Card.Text>
          SiaSparkles is working hard to get better at coding. It is a difficult job but we will get it done.
        </Card.Text>
        <Button variant="primary">Let's GOOOO</Button>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;