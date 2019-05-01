import React, { Component } from 'react'

import Nav from './NavBar'
import App from './App'
import Form from './Form'
import Button from './Button'

import { BrowserRouter, Route } from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />

        <Route name="home" exact path="/" component={App}/>
        <Route name="form" path="/form" component={Form}/>
        <Route name="button" path="/button" component={Button}/>
      </BrowserRouter>
    )
  }
}

export default Routes