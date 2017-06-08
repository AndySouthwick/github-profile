import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Leftbar from './Leftbar';
import Mainbar from './Mainbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
          <div className="container">
              <div className="row">
                  <div className="col-md-3">
                      <Leftbar/>
                  </div>
                  <div className="col-md-9">
                        <Mainbar/>
                  </div>

              </div>
          </div>
      </div>
    );
  }
}

export default App;



