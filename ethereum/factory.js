import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x9dD5405491EAD8F136471AFD7127f5eD451A30B4'
  // 0x9dD5405491EAD8F136471AFD7127f5eD451A30B4
);

console.log(instance);
export default instance;
