import React, { Component } from 'react';

export default class AddEcho extends Component {
  constructor(props) {
    super(props);
    this.state = { newEcho: '' };
  }

  handleChange(e) {
    this.setState({ newEcho: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitEcho(this.state.newEcho);
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Enter a new echo" onChange={this.handleChange.bind(this)} />
        <button type="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
      </form>
    );
  }
}
