import React from 'react';
import {Card,Row,Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import "./Shows.css"

const Shows = () => {

    const importAll = (r) => {
        return r.keys().map(r);
    }

    const festivals = importAll(require.context('../assets/festivals', false, /\.(png|jpe?g|svg)$/));
    const shows = importAll(require.context('../assets/shows', false, /\.(png|jpe?g|svg)$/));
      
    const festival = festivals.map((image,index) =>
        <div key={index}> {/*refer you key in within a div*/}
            <Col>
                <Card className="m-1">
                <Card.Img variant="top" src={image} />
                </Card>
            </Col>
        </div>
    )

    const show = shows.map((image,index) =>
    <div key={index}> {/*refer you key in within a div*/}
        <Col>
            <Card  className="m-1">
            <Card.Img variant="top" src={image} />
            </Card>
        </Col>
    </div>
)

    return (
        <div>
          <div className = "works">
            <h1>SHOWS</h1>
            <Container>
              <Row xs={1} md={3}>
                {show}
              </Row>  
          </Container>           
          </div>
          <div className = "works">
          <h1>FESTIVALS</h1>
            <Container>
              <Row xs={1} md={3}>
                {festival}
              </Row>  
          </Container>           
          </div>     
        </div>
    )
}

export default Shows

