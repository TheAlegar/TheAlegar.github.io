import React from 'react';
import {Card,Row,Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import "./Clients.css"

const Clients = () => {

    const importAll = (r) => {
        return r.keys().map(r);
    }

    const clients = importAll(require.context('../assets/clients', false, /\.(png|jpe?g|svg)$/));
      
    const element = clients.map((client,index) =>
        <div key={index}> {/*refer you key in within a div*/}
            <Col>
                <Card className="m-1">
                <Card.Img className='card-img' variant="top" src={client} />
                </Card>
            </Col>
        </div>
    )

    return (
        <div>
          <div className = "works">
            <h1>CLIENTS</h1>
            <Container>
              <Row xs={1} md={3}>
                {element}
              </Row>  
            </Container>
          </div>           
        </div>
    )
}

export default Clients

