import React from 'react';
import HorendBeasts from './HorendBeasts';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterArray: this.props.array,

        }

    }
    change = (e) => {
        e.preventDefault();



        // let filteredArr = {


        // }


        // if(e.target.value==1){


        //     console.log('test');

        // alert(this.state.filterArray[1].horns);
        // alert(this.state.filterArray.e.target.value);


        // }

        if (e.target.value == 1) {
            // alert("one" );

            this.setState(
                {
                    filterArray:
                        this.props.array.filter((element) => element.horns == 1),
                }
            );

        }

        if (e.target.value == 2) {
            // alert("two" );
            this.setState(
                {
                    filterArray:
                        this.props.array.filter((element) => element.horns == 2),
                }
            );
        }

        if (e.target.value == 3) {
            // alert("three" );
            this.setState(
                {
                    filterArray:
                        this.props.array.filter((element) => element.horns == 3),
                }
            );

        }

        if (e.target.value == 100) {
            this.setState(
                {
                    filterArray:
                        this.props.array.filter((element) => element.horns == 100),
                }
            );

            // alert("one hundred" );


        }

        // console.log(this.state.filterArray);
    }

    render() {

        return (

            <div>
                <Form.Select onChange={this.change} aria-label="Default select example">

                    <option value='All' >All</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="100">one hundred</option>
                </Form.Select>
                {this.state.filterArray.map((elemnt) => {
                    return <HorendBeasts
                        title={elemnt.title}
                        image_url={elemnt.image_url}
                        description={elemnt.description}
                        horns={elemnt.horns}
                        // handleClose={this.props.handleClose}
                        handleShow={this.props.handleShow}

                    />
                }

                )}

            </div>

        )
    }
}

export default Main;