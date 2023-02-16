// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

contract MyContract {
  event Log(address indexed addr);

  constructor() {
    emit Log(address(this));
  }

  function add(uint256 a, uint256 b) public pure returns (uint256) {
    return a + b;
  }
}
