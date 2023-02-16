// SPDX-License-Identifier: MIT

pragma solidity ^0.5.13;

contract MyContract {
  uint c;
  event Log1(address indexed addr);
  event Log2(address addr);
  event Log3(address addr, uint a, uint b, uint c);

  constructor() public{
    emit Log1(address(this));
    emit Log2(address(this));
  }

  function add1(uint256 a, uint256 b) public pure returns (uint256) {
    return a + b;
  }

  function add2(uint256 a, uint256 b) public returns (uint256) {
    c = a + b;
    emit Log3(address(this), a, b, c);
    return c;
  }

}
