import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//crousal import--->>
import Carousel from 'react-bootstrap/Carousel';


//card import-->
import Card from 'react-bootstrap/Card';

//Row import-->
import { Row } from 'react-bootstrap';



function Header(){
    return(
        <>
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> 
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Service">Service</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

{/* crousal use  */}

    <Carousel>
      <Carousel.Item>
        <img src="https://www.shutterstock.com/shutterstock/photos/412805536/display_1500/stock-photo-green-swallowtail-butterfly-papilio-palinurus-insect-in-the-nature-habitat-sitting-in-the-green-412805536.jpg" height="650px" width="100%" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://www.shutterstock.com/shutterstock/photos/1875396451/display_1500/stock-photo-dad-holding-infant-son-up-in-the-air-in-the-middle-of-forest-1875396451.jpg" height="650px" width="100%" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src="https://images.ctfassets.net/hrltx12pl8hq/29slzVZfucEQwKoKc8QcEA/ed7ceb74525e822dd3eb888f570f0d52/adventure?fit=fill&w=768&h=432&fm=webp" height="650px" width="100%" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> <br /><br />

    <h1 style={{marginLeft:"30px"}}>About</h1>
    <p style={{marginLeft:"30px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, harum? Incidunt neque ratione est velit,<br /> animi hic voluptatum ipsam suscipit quae fugiat consectetur sed amet obcaecati necessitatibus! Animi, <br /> saepe ducimus.</p>
{/* child ko row me lane ke liye ham <Row></Row> ka use karenge */}
{/* Container=(ye child ke baju me pedding de deta hai) & container floot =(ye sari pedding hata deta hai ) or ham isme class bna ke usme 
css bhi apply kar sakte hai  */}
<Container  style={{padding:"30px", }} >
 <Row style={{gap:"100px"}}>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.shutterstock.com/shutterstock/photos/2438627073/display_1500/stock-photo-support-care-or-happy-family-men-and-kids-bonding-with-foster-puppy-or-pet-and-enjoying-time-2438627073.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.shutterstock.com/shutterstock/photos/2438627073/display_1500/stock-photo-support-care-or-happy-family-men-and-kids-bonding-with-foster-puppy-or-pet-and-enjoying-time-2438627073.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.shutterstock.com/shutterstock/photos/2438627073/display_1500/stock-photo-support-care-or-happy-family-men-and-kids-bonding-with-foster-puppy-or-pet-and-enjoying-time-2438627073.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Row>
    </Container>
    <footer>
        <ul>
            <li> About </li>
             <li> Service </li>
              <li> contect </li>
               <li> email  </li>
        </ul>
    </footer>
        </>
    )
}
export default Header