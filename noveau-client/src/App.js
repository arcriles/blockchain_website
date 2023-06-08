import logo from './logo.svg';
import './App.css';
// import ContractData from './ContractData';
import Header from './Header.js';
import Home from './Home.js';
import Footer from './Footer.js';
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
      <Header />
      <Home />
      <Footer />
    </WagmiConfig>
  )
}

export default App