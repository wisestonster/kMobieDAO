async function main() {
    const KMovieNFT = await ethers.getContractFactory("KMovieNFT")
  
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await KMovieNFT.deploy()
    await myNFT.deployed()
    console.log("Contract deployed to address:", myNFT.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  