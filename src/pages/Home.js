import { Row, Col, Container } from "react-bootstrap";
import Maps from "../components/Maps";
import Result from "../components/Result";
import Search from "../components/Search";

const Home = ({handleLogout}) => {
    return (
        <>
        <Container fluid className="home-container">
            <Row>
              <Col className="maps-row"><Maps /></Col>
            </Row>
            <Row>
              <Col className="maps-row"><Search /></Col>
            </Row>
        </Container>
        <Result />
        </>
     );
}
 
export default Home;