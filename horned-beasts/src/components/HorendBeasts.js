import React from "react";

class HorendBeasts extends React.Component{

render(){
    return(

        <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <img src={this.props.img} alt=""/>
        </div>
    )


}


}

export default HorendBeasts;