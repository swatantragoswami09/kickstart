import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x9abf414fA8876174661009B7f9bd7436ABdC17ee'
);

console.log(instance);
export default instance;
