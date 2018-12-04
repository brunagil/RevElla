import React, { Component } from 'react';
import './App.css';
import Complaint from './Pages/Complaint'
import Home from './Pages/Home'
import Navbar from './Components/navbar'
import Footer from './Components/footer'
// {/* <Footer /> */}
// {/* </React.Fragment> */}
// // <React.Fragment>
//   {/* <Navbar /> */}

class App extends Component {
  render() {
    return (
        <Home />
    );
  }
}

export default App;
