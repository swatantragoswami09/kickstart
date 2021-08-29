const HDWalletProvider= require('@truffle/hdwallet-provider');
const Web3=require('web3');
const compiledFactory=require('./build/CampaignFactory.json');


const provider =new HDWalletProvider(
  'chaos real road jar among arrange pottery steak endorse bottom chunk ability',
  'https://rinkeby.infura.io/v3/2048571baa20457290df2b58112625b6'
);

const web3= new Web3(provider);
const deploy = async()=>{
  const accounts=await web3.eth.getAccounts();
  console.log('Attempting to deploye from Account',accounts[0]);
  const result= await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
            .deploy({data: compiledFactory.bytecode})
            .send({gas:'1000000',from:accounts[0]});
            // console.log(result);
console.log('Contract deployed to ', result.options.address);

};
deploy();
