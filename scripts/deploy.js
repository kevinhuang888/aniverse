
const main = async () => {
    // Compile Contract
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');

    // Hardhat creates local eth network for this contract
    const gameContract = await gameContractFactory.deploy(
        ["Zenitsu", "Kaneki", "Akame"],     // Names
        ["https://cloudflare-ipfs.com/ipfs/QmXhgtkuSPcg8ev61Bfx6vkb77hqoSgYKemgS1TYiT3SbN",       // Images
        "https://cloudflare-ipfs.com/ipfs/Qmckqy4ggDw2ywzseLVXBYJ4mUxo2x3rm2PyYj6rHH1jqL", 
        "https://cloudflare-ipfs.com/ipfs/Qmctwt155Jmrn7Euxzoto115mpSNXpnxGCGnDknyhtbMqm"],
        [200, 320, 270],                    // HP values
        [290, 240, 250],                    // Attack damage values
        "Romeo",                            // Boss Name
        "https://cloudflare-ipfs.com/ipfs/QmayuZhL22r83YD8WVbVsuB7ah5ZCaTqGZw64qU2gdDW2i",  // Boss image
        10000, // Boss hp
        50 // Boss attack damage
    );

    // Wait until contract is mined 
    await gameContract.deployed();

    // Contract Address
    console.log("Contract deployed to:", gameContract.address);

    
    // Get the value of the NFT's URI.
    /*
    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("Token URI:", returnedTokenUri);
    */
}

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();