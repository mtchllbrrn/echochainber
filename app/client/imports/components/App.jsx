import React, { Component } from 'react';
import web3 from '/client/lib/init.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blockNumber: 0,
    };
  }

  componentDidMount() {
    web3.eth.getBlockNumber((err, res) => {
      if (err) {
        throw new Error(err);
      } else {
        this.setState({ blockNumber: res });
      }
    });
  }

  render() {
    return (
      <h1>Current block number: {this.state.blockNumber}</h1>
    );
  }
}
