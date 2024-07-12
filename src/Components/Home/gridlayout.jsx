import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './gridlayout.css';

function AutoLayoutExample() {
  return (
    
    <Container className="custom-container">
      <Row className="custom-row">
        <Col id='col1'><img src="/src/assets/horse riding.jpg" alt="" /></Col>
        <Col id="col2"><img src="/src/assets/scene.jpg" alt="" /></Col>
        <Col id="col3"><img src="/src/assets/booth.jpg" alt="" /></Col>
        
      </Row>
      <Row className="custom-row">
        <Col id="R1col1"><img src="/src/assets/tent.jpg" alt="" /></Col>
        <Col id="R1col2"><img src="/src/assets/cat.jpg" alt="" /></Col>
        <Col id="R1col3"><img src="/src/assets/tower.jpg" alt="" /></Col>
  
      </Row>
    </Container>
  );
}


export default AutoLayoutExample