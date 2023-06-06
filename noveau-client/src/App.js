import logo from './logo.svg';
import './App.css';

import { useConnect, useAccount, useDisconnect, WagmiConfig, createConfig, configureChains , useConfig} from 'wagmi';
import { goerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { useState } from 'react';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [goerli],
  [publicProvider()],
)

const metaMaskConnector = new MetaMaskConnector({
  chains: [goerli],
})

const client = createConfig({
  autoConnect: true,
  connectors: [metaMaskConnector],
  publicClient,
  webSocketPublicClient,
})


function App() {
  return (
    <WagmiConfig config={client}>
      <Profile />
    </WagmiConfig>
  )
}

function Profile() {
  const { connector: activeConnector, isConnected } = useAccount()
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
 
  return (
    <>
      {isConnected && <div>Connected to {activeConnector.name}</div>}
 
      {connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {isLoading &&
            pendingConnector?.id === connector.id &&
            ' (connecting)'}
        </button>
      ))}
 
      {error && <div>{error.message}</div>}
    </>
  )
}

export default App;
