import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SiteWrapper from './SiteWrapper';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <SiteWrapper 
            background='register'
          />
        )}/>
        <Route path='/login' render={() => (
          <SiteWrapper 
            background='login'
          />
        )}/>
      </div>
    );
  }
}

export default App;
