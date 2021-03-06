import React from 'react';
import toppsLogo from './topps2020.jpeg';
import inventoryPic from './inventory.jpeg'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
import { Image, Menu, Button } from 'semantic-ui-react';

import Inventory from './components/Inventory.js';
import CardsList from './components/CardsList.js';
import PriceCheck from './components/PriceCheck.js';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="Ebay-Dash">
          <img src={toppsLogo} className="Topps-Logo" alt="topp-logo" />
        </header>
        <Menu>
          <Menu.Item>
            <Link to='/inventory'> <Button >  <Image src={inventoryPic} /> </Button> </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/cardslist'> <Button >  <Image src={inventoryPic} /> </Button> </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/pricecheck'> <Button >  <Image src={inventoryPic} /> </Button> </Link>
          </Menu.Item>
          <Menu.Item>
            <Button>Log-in</Button>
          </Menu.Item>
        </Menu>

        <Switch>
          <Route path="/inventory">
            <Inventory/>
          </Route>
          <Route path="/cardslist" >
            <CardsList/>
          </Route>
          <Route path="/pricecheck" >
            <PriceCheck/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
