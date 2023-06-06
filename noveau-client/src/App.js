import logo from './logo.svg';
import './App.css';
import ContractData from './ContractData';
import Profile from './Profile.js';

import { WagmiConfig, createConfig } from 'wagmi'
import { goerli } from 'wagmi/chains'
import { createPublicClient, http } from 'viem'

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: goerli,
    transport: http(),
  }),
})

function App() {
  return (
    <WagmiConfig config={config}>
      <Profile />
      <ContractData />
    </WagmiConfig>
  )
}

export default App