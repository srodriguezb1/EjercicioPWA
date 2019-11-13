import React, { Component } from 'react';
import { Card , ListGroup,ListGroupItem} from 'react-bootstrap';

class Heroe extends Component {

    state = {
        name: this.props.value.name,
        descripcion: this.props.value.description,
        image: this.props.value.thumbnail.path,
        comics:this.props.value.comics.items
    }


    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    
                    <Card.Body>
                        <Card.Title>Nombre:<h2>{this.state.name}</h2></Card.Title>
                        <Card.Text>
                           {this.state.descripcion}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        Comics:
                    </Card.Body>
                    <ListGroup>
                        {this.state.comics.map((e) => ( 
                            <ListGroupItem >{e.name}</ListGroupItem>
                        ))}
                        </ListGroup>
                </Card>
            </div>
        );
    }
}

export default Heroe;