import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
const Home = () => {
    return <div>
        <div className="HomeImage">
            <img src="/src/assets/img2.jpg" alt="" />
        </div>
        <div className="HomeText">
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis accumsan tellus, quis luctus nulla. Pellentesque dui nibh, ullamcorper at pellentesque quis, vulputate ut augue. Nunc sagittis posuere urna, vel ultricies dui bibendum quis. Nunc cursus aliquet lorem, sed placerat orci maximus eu. Quisque malesuada felis ut risus lobortis, sed porttitor arcu commodo. Morbi dignissim pulvinar luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus feugiat neque magna, ac gravida lacus aliquam eu. Maecenas faucibus ullamcorper neque eu eleifend. Nunc ullamcorper nibh vulputate semper vulputate. Praesent nunc dui, fermentum nec justo at, vulputate sollicitudin ex. Proin tempor metus id elit faucibus dapibus. Curabitur eu mauris est. Integer felis orci, fermentum a laoreet nec, pharetra a nisi.</p> <br />

            <p>Maecenas ut placerat nulla, et elementum ante. Vestibulum convallis, dolor sit amet dapibus mollis, dolor purus maximus tellus, at vulputate lacus sapien pretium diam. Ut euismod eu leo vitae accumsan. Donec sapien ex, luctus et enim et, efficitur sollicitudin nibh. Quisque posuere semper ipsum ut luctus. Suspendisse ullamcorper ultricies nibh, sed luctus sapien venenatis eu. Fusce eu risus lacus. Quisque auctor, velit eu sollicitudin tempor, elit leo fermentum tellus, nec malesuada nulla risus ac augue. Praesent a lacinia ipsum. Nunc at nulla ut ipsum porttitor sodales. In arcu quam, tincidunt id viverra sollicitudin, hendrerit in tortor.</p><br/>

            <p>Aliquam sed rhoncus mauris, ut lacinia nunc. Sed tincidunt sagittis purus nec finibus. Nam et odio et metus sagittis volutpat eu eget purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a libero massa. In elementum erat sed diam luctus, eu suscipit lacus hendrerit. Nullam ornare ipsum nec efficitur vestibulum.</p><br/>
        </div>
        <div className='photos'>
            <h1>My Photos</h1>

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
        </div>
    </div>;
}
 
export default Home;