pragma solidity ^0.4.8;

contract EchoChainber {
    string[] public echoes;

    event logEcho(string echo);

    function speak(string message) {
        logEcho(message);
        echoes.push(message);
    }
    
    function numEchoes() constant returns (uint) {
        return echoes.length;
    }
}
