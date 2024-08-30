import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0xfc04Cb7392147636162c660c144783763538fe69";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0x99c9565F3769D40641429967604144a7Ba48AAA4
