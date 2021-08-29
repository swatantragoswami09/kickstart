import Web3 from 'web3';

let web3;
if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
  // we are in the browser and metamask is running
  web3 =new Web3(window.web3.currentProvider);

}else{
  // we are on the browser *OR* the user is not running the metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/2048571baa20457290df2b58112625b6'

  );
  web3=new Web3(provider);
}

export default web3;
