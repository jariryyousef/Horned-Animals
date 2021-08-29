import React from 'react';

import Header from './components/header';
import Main from './components/Main';
import Footer from './components/footer';

// import HorendBeasts from './components/HorendBeasts';
class App extends React.Component {
  render(){
  return (
     <div className="App">
    <Header/>
    <Main/>
    <Footer/>
    </div>
  );
}}

export default App;