import Web3 from 'web3';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';

import App from '/client/imports/components/App.jsx';

window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.log('No web3? You should consider trying MetaMask!');
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
  }

  // Now you can start your app & access web3 freely:
  // startApp();
});

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
