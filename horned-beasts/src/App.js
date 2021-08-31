import React from 'react';

import Header from './components/header';
import Main from './components/Main';
import Footer from './components/footer';
import array  from './assest/data.json';
import SelectedBeast from './components/SelectedBeast';


class App extends React.Component {

  
  constructor(props){
  super(props);

    this.state = {
      
      state:false,
    }

  }

  handleClose = () => {
    this.setState({show:false})

    }

    handleShow = () =>{ 
      this.setState({show:true
      
      
      })

    
    }


  render(){
  return (
     <div className="App">
    <Header/>
    <Main
    array={array}
    // handleClose={this.handleClose}
    handleShow={this.handleShow}
   
    
    />
    <Footer/>
    <SelectedBeast
    handleClose={this.handleClose}
    handleShow={this.handleShow}
    show = {this.state.show} 
    
    />
    </div>
  );
}}

export default App;


