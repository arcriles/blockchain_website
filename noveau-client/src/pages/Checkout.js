import { useContractRead, useContractWrite, usePrepareContractWrite, useAccount, useConnect, useBalance, useDisconnect} from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { contractAddress, jsonABI } from '../ABI/donationsABI'
import { useState } from "react";
import { Link, useParams, redirect } from "react-router-dom";

function Checkout() {
  let { pictureId } = useParams();
  const [inputs, setInputs] = useState({});

  const { address } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()
  const { data, error, isError} = useBalance({
    address: address,
  });

  const { config } = usePrepareContractWrite({
    address: contractAddress,
    value: inputs.val,
    abi: jsonABI,
    functionName: 'addNewComment',
    args: [pictureId, inputs.content, inputs.hidden],
    onSuccess(data) {
      redirect("../preview/" + pictureId)
    },
    onSettled(data, error) {
      console.log('Settled', { data, error })
    },
  });

  const { data: transactionData, isLoading: transactionLoacing, isSuccess, write } = useContractWrite(config);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  if (address)
    return (
      // <div>
      //   <p>Account: {address}</p>
      //   <p>Error: {error ? error : "none"}</p>
      //   <p>Balance: {data?.formatted} {data?.symbol}</p>
      //   <button onClick={() => disconnect()}>Disconnect</button>
      // </div>
<div id="all">
    <div id="content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* <!-- breadcrumb--> */}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li aria-current="page" className="breadcrumb-item active">Donasi</li>
              </ol>
            </nav>
          </div>
          <div id="checkout" className="col-lg-12">
            <div className="box">
              <form method="get">
                <h1>Donasi</h1>
                <div className="nav flex-column flex-md-row nav-pills text-center">
                  <h5><i>isilah data anda terlebih dahulu untuk menyelesaikan transaksi</i></h5>
                </div>
                <div className="content py-3">
                  {/* <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user">User</label>
                        <input id="user" type="text" className="form-control" />
                      </div>
                    </div>
                  </div> */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">picture ID
                        <label for="PID"></label>
                        <input id="PID" type="text" className="form-control" value={pictureId} disabled/>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /.row--> */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="wallet">wallet</label>
                        <input id="wallet" type="text" className="form-control" value={address} disabled/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="donasi">jumlah donasi (Wei) </label>
                        <input id="donasi" type="number" className="form-control" 
                        name="val" 
                        value={inputs.val || ""} 
                        onChange={handleChange}/>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /.row--> */}
                  <div className="row">
                    <div className="col-md-6 col-lg-3">
                      <div className="form-group">
                        <label for="pesan">pesan</label>
                        <input id="pesan" type="long-text" className="form-control" 
                        name="content" 
                        value={inputs.content || ""} 
                        onChange={handleChange}/>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="form-group">
                        <label for="anon">anonimitas</label>
                        <select id="anon" className="form-control" 
                        name="hidden" 
                        value={inputs.hidden || "1"} 
                        onChange={handleChange}>
                          <option value="false">tidak anonim</option>
                          <option value="true">anonim</option>
                        </select> 

                      </div>
                    </div>
                  </div>
                  {/* <!-- /.row--> */}
                </div>
                <div className="box-footer d-flex justify-content-between">
                  <Link to={`../preview/${pictureId}`}>
                    <a className="btn btn-outline-secondary"><i className="fa fa-chevron-left"></i>batalkan pesanan</a>
                  </Link>
                  <button type="submit" className="btn btn-primary" onClick={() => write()}>Selesaikan pesanan<i className="fa fa-chevron-right"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
  return (
    <div id="all">
    <div id="content">
        <div className="container">
        <div className="row">
            <div className="col-lg-12">
            {/* <!-- breadcrumb--> */}
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li aria-current="page" className="breadcrumb-item active">Donasi</li>
                </ol>
            </nav>
            </div>  
            <div id="checkout" className="col-lg-12">
        <div className="box">
            <div className="col-lg-9 order-1 order-lg-2">
              <h3>Please Connect To Metamask Before Continuing!</h3>
              <button className="btn btn-primary" onClick={() => connect()}>Connect Wallet</button>
            </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    // <iframe src="index.html"></iframe>
  )


}

export default Checkout