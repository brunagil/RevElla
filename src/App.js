import React, { Component } from 'react';
import './App.css';
import Complaint from './Pages/Complaint'
import RevEllaForm from './Pages/RevEllaForm/RevEllaForm'
import Home from './Pages/Home'
import Footer from './Components/footer'
import { withRouter } from 'react-router'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <React.Fragment> 
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/form' component= {RevEllaForm}/> 
          <Footer />
        </Switch>
      </React.Fragment>

    );
  }
}

export default withRouter(App);
