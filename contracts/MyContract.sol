// SPDX-License-Identifier: MIT

pragma solidity ^0.5.13;

contract MyContract {
  event Log1(address indexed addr);
  event Log2(address addr);

  constructor() public{
    emit Log1(address(this));
    emit Log2(address(this));
  }

  function add(uint256 a, uint256 b) public pure returns (uint256) {
    return a + b;
  }
}
