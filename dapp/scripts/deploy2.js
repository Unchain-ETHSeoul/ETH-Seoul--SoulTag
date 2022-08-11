const { utils } = require("ethers");

async function main() {
    const Token = await ethers.getContractFactory("Sfile");
    const token = await Token.deploy();
    console.log("Token address:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
});