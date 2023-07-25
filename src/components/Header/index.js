import { Col, Container, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css'

function Header() {
    return(
        <Container fluid className="header">
            <Navbar expand="lg">
                <Col className="col-12 col-lg-4 d-flex justify-content-center">
                    <Link to="/">Rob Stowe</Link>
                </Col>
            </Navbar>
        </Container>
    )
}






export default Header;