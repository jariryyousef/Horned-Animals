import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";

class HorendBeasts extends React.Component{


    constructor(props){
        super(props);
        this.state={
        numOfVafr: 0,

        }
    }
    numOfVafr = () =>{
        this.setState({

            numOfVafr: this.state.numOfVafr + 1
        })
        
    }


render(){
    return(
<div>
        <Card style={{ width: '18rem' }}>
  <Card.Img  variant="top" src={this.props.image_url} onClick={this.numOfVafr} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.description}
    </Card.Text>
    <Button onClick={this.numOfVafr} variant="primary">Like</Button>
    <p>❤️ {this.state.numOfVafr}</p>
  </Card.Body>
</Card>
</div>
        
    )


}


}

export default HorendBeasts;