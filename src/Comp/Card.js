import {Card,Button,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
function MyCard(){
return (

<Col>
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="images/image1.jpg" alt="" />
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
</Col>
)
}
export default MyCard