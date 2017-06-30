import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import EchoChainber from '/client/lib/EchoChainber.js';

import AddEcho from './AddEcho.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      echoes: [],
      numEchoes: 0,
    };
  }

  componentDidMount() {
    this.getEchoes((echoes) => {
      this.setState({
        numEchoes: echoes.length,
        echoes,
        loading: false,
      });
    });
  }

  getEchoes(callback) {
    this.getNumEchoes().then((numEchoes) => {
      const promises = [];
      for (let i = 0; i < numEchoes; i++) {
        promises.push((this.getEcho(i)));
      }

      Promise.all(promises).then((echoes) => {
        callback(echoes);
      });
    });
  }

  getEcho(i) {
    return new Promise((resolve, reject) => {
      EchoChainber.echoes(i, (err, echo) => {
        if (err) {
          reject(err);
        } else {
          resolve(echo);
        }
      });
    });
  }

  getNumEchoes() {
    return new Promise((resolve, reject) => {
      EchoChainber.numEchoes((err, bigNumEchoes) => {
        if (err) {
          reject(err);
        } else {
          resolve(bigNumEchoes.toNumber());
        }
      });
    });
  }

  submitEcho(echo) {
    EchoChainber.speak(echo, (err, res) => {
      if (err) throw new Meteor.Error(err);
      console.log(res);
    });
  }

  render() {
    if (this.state.loading) return <h1>LOADING</h1>;

    return (
      <div>
        <h1>Number of echoes: {this.state.numEchoes}</h1>
        <ul>
          {this.state.echoes.map((echo) => {
            return <li key={Math.random()*1000+1}>{echo}</li>;
          })}
        </ul>
        <AddEcho submitEcho={this.submitEcho.bind(this)} />
      </div>
    );
  }
}
