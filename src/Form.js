import React from 'react'

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      value: '',
      messageBoard: []
    }
  }

  _handleChange = (e) => {
    console.log(e.target.value);
    this.setState({value: e.target.value})
  }

  _submitMsg = (e) => {
    if (this.state.value.length) {
      let msgs = this.state.messageBoard

      this.setState({
        messageBoard: [...msgs, this.state.value]
      })

      this.setState({value: ''})
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          ref="Input_message"
          onChange={this._handleChange}
        />
        <button onClick={this._submitMsg}>Submit</button>

        <ul>
          {
            this.state.messageBoard.map((msg, i) => {
              return <li key={'message-' + i}>{msg}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Form
