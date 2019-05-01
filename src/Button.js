import React, { Component } from 'react'

class Button extends Component {
  constructor() {
    super();
    this.state = {
      clickCount: 0
    };
  }

  _handleClick = (event) => {
    console.log('clicked!', event)
    let clicks = this.state.clickCount;
    this.setState({clickCount: clicks + 1})
  }

  render() {
    return (
      <div>
        <h3>{this.state.clickCount}</h3>
        <button onClick={this._handleClick}>Click me!</button>
      </div>
    );
  }
}

export default Button