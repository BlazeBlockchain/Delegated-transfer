pragma solidity ^ 0.8.4;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import 'delegated-transfer-token/contracts/DTT.sol';

contract DTTBasic20 is ERC20, DTT {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        // Mint 200 tokens when the contract is deployed
        _mint(_msgSender(), 200 * (10 ** decimals()));
    }
}