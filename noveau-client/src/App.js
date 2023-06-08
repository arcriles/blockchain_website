import logo from './logo.svg';
import './App.css';
// import ContractData from './ContractData';
import Header from './Header.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Preview from './pages/Preview.js';
import Search from './pages/Search.js';
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
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/preview' element={<Preview />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        <Footer />
      </Router>
    </WagmiConfig>
  )
}

export default App