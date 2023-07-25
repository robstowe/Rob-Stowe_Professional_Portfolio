import { Col, Container, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import photo from './assets/robstowe.png'
import './style.css'

function Header() {
    return(
        <Container fluid className="header">
            <Navbar expand="lg">
                <Col className="col-12 col-lg-4 d-flex justify-content-center">
                    <Link to="/"><img src={photo} alt="Rob Stowe"/> </Link>
                </Col>
            </Navbar>
        </Container>
    )
}


export default Header;