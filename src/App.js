import React, { Component } from 'react';
import './App.css'
import {BrowserRouter , Route , Switch } from 'react-router-dom'

import Upload from './components/Upload'
import Canvas from './components/Canvas'
import Entry from './components/Entry'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Cartographier">
          <Switch>
            <Route exact path='/' component= {Upload} />
            <Route path='/locate' component= {Canvas} />
            <Route Path='/data/entry' component = {Entry} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
