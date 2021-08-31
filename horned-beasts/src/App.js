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
      show:false,
    };
    this.title=" ";
    this.desc=" ";
    this.image=" ";

  }

  handleClose = () => {
    this.setState({show:false})

    }

    handleShow = (tit, des, img) =>{ 
      this.setState({show:true
      })
      this.title=tit;
      this.desc=des;
      this.image=img;
      
      
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
    // handleShow={this.handleShow}
    show = {this.state.show} 
    tit={this.title}
    desc={this.desc}
    img={this.image}
    />
    </div>
  );
}}

export default App;


