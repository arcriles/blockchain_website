import { useAccount, useConnect, useBalance, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
var perf = require('./index.html');

function Profile() {
  const { address } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()
  const { data, error, isError} = useBalance({
    address: address,
  });

  if (address)
    return (
      <div>
        <p>Account: {address}</p>
        <p>Error: {error ? error : "none"}</p>
        <p>Balance: {data?.formatted} {data?.symbol}</p>
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    )
  return (
    // <button onClick={() => connect()}>Connect Wallet</button>
    <iframe src="index.html"></iframe>
  )
}

export default Profile