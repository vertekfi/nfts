import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'TestNFT',
  tokenName: 'TEST',
  tokenSymbol: 'TEST',
  hiddenMetadataUri: 'ipfs://bafybeigm3ld5qff2vh3eaxzcmpbyyp6miwdohwayysoarmhz3vsmhzn2ay/hidden.json',
  maxSupply: 100,
  whitelistSale: {
    price: 0.001,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.001,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.001,
    maxMintAmountPerTx: 50,
  },
  contractAddress: '0x592CDfeCD0fa5cEc7C80606DBbB9894Ed0CC2816',
  marketplaceIdentifier: 'TEST',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
