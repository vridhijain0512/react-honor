import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './components/HomeComponent';
import { ITEMS } from './shared/items';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: ITEMS
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Menskart</NavbarBrand>
          </div>
        </Navbar>
        <Home items={this.state.items} />
      </div>
    );
  }
}

export default App;
