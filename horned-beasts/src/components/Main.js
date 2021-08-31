import React from 'react';
import HorendBeasts from './HorendBeasts';
import SelectedBeast from './SelectedBeast';


class Main extends React.Component {
     newarr=this.props.array.map((elemnt)=>{
        return <HorendBeasts 
        title={elemnt.title}
        image_url={elemnt.image_url}
        description={elemnt.description}
        // handleClose={this.props.handleClose}
        handleShow={this.props.handleShow}
        
        />
       
    
   
        }
     )

     

    render() {
        
        return (
            
            
         <main>
          
               
        {this.newarr}
         </main>
         
        )
    }
}

export default Main;

