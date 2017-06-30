import { Meteor } from 'meteor/meteor';

const { CONTRACT_ABI, CONTRACT_ADDR } = Meteor.settings.public;

const EchoChainber = web3.eth.contract(CONTRACT_ABI).at(CONTRACT_ADDR);

export default EchoChainber;
