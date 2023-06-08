import { useContractRead, useContractWrite, useAccount, useConnect, useBalance, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { contractAddress, jsonABI } from '../ABI/donationsABI'
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

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
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            {/* <!-- breadcrumb--> */}
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li aria-current="page" class="breadcrumb-item active">Donasi</li>
              </ol>
            </nav>
          </div>
          <div id="checkout" class="col-lg-12">
            <div class="box">
              <form method="get" action="sukses.html">
                <h1>Donasi</h1>
                <div class="nav flex-column flex-md-row nav-pills text-center">
                  <h5><i>isilah data anda terlebih dahulu untuk menyelesaikan transaksi</i></h5>
                </div>
                <div class="content py-3">
                  {/* <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="user">User</label>
                        <input id="user" type="text" class="form-control" />
                      </div>
                    </div>
                  </div> */}
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">picture ID
                        <label for="PID"></label>
                        <input id="PID" type="text" class="form-control" value={pictureId} disabled/>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /.row--> */}
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="wallet">wallet</label>
                        <input id="wallet" type="text" class="form-control" value={address} disabled/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="donasi">jumlah donasi (Wei) </label>
                        <input id="donasi" type="number" class="form-control" />
                      </div>
                    </div>
                  </div>
                  {/* <!-- /.row--> */}
                  <div class="row">
                    <div class="col-md-6 col-lg-3">
                      <div class="form-group">
                        <label for="pesan">pesan</label>
                        <input id="pesan" type="long-text" class="form-control" value=""/>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                      <div class="form-group">
                        <label for="anon">anonimitas</label>
                        <select id="anon" class="form-control">
                          <option value="1">anonim</option>
                          <option value="2">tidak anonim</option>
                        </select> 

                      </div>
                    </div>
                  </div>
                  {/* <!-- /.row--> */}
                </div>
                <div class="box-footer d-flex justify-content-between"><a href="index.html" class="btn btn-outline-secondary"><i class="fa fa-chevron-left"></i>batalkan pesanan</a>
                  <button type="submit" class="btn btn-primary">Selesaikan pesanan<i class="fa fa-chevron-right"></i></button>
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