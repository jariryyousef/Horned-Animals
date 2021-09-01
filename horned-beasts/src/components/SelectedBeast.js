import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {

    render() {
        return (
            <div>
               
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.tit}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={this.props.img } style={{width:"450px" ,height:"400px"}}/>
                        {this.props.desc}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                        
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
export default SelectedBeast;