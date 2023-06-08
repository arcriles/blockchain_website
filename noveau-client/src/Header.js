import { useAccount, useConnect, useBalance, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Helmet } from "react-helmet";
// var perf = require('./index.html');
import "./vendor/bootstrap/css/bootstrap.min.css"
import "./vendor/font-awesome/css/font-awesome.min.css"
// import "https://fonts.googleapis.com/css?family=Roboto:100,300,400,700"
import "./vendor/owl.carousel/assets/owl.carousel.css"
import "./vendor/owl.carousel/assets/owl.theme.default.css"
import "./css/style.default.css"
// import "./css/custom.css"

function Header() {
  const { address } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()
  const { data, error, isError} = useBalance({
    address: address,
  });

  // if (address)
  //   return (
  //     <div>
  //       <p>Account: {address}</p>
  //       <p>Error: {error ? error : "none"}</p>
  //       <p>Balance: {data?.formatted} {data?.symbol}</p>
  //       <button onClick={() => disconnect()}>Disconnect</button>
  //     </div>
  //   )
  return (
    // <button onClick={() => connect()}>Connect Wallet</button>
    // <iframe src="index.html"></iframe>
    <div className="header mb-5">
      <Helmet>
        {/* <head> */}
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Noveau</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all,follow" />
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700" />
        
        {/* <!-- Tweaks for older IEs--><!--[if lt IE 9]> */}
            <script type="text/jsx" src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js" />
            <script type="text/jsx" src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js" />
        {/* <![endif]--> */}
      </Helmet>
      
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a href="index.html" className="navbar-brand home">
            <img src="img/logo.png" alt="Noveau" className="d-none d-md-inline-block"></img>
            <img src="img/logo-small.png" alt="Obaju logo" className="d-inline-block d-md-none"></img>
            <span className="sr-only">Noveau - go to homepage</span>
          </a>
          <div className="navbar-buttons">
            <button type="button" data-toggle="collapse" data-target="#navigation" className="btn btn-outline-secondary navbar-toggler"><span className="sr-only">Toggle navigation</span><i className="fa fa-align-justify"></i></button>
            <button type="button" data-toggle="collapse" data-target="#search" className="btn btn-outline-secondary navbar-toggler"><span className="sr-only">Toggle search</span><i className="fa fa-search"></i></button><a href="basket.html" className="btn btn-outline-secondary navbar-toggler"><i className="fa fa-shopping-cart"></i></a>
          </div>
          <div id="navigation" className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><a href="index.html" className="nav-link active">Home</a></li>
              <li>
              </li>
            </ul>
          </div>
             
            <div className="navbar-buttons d-flex justify-content-end">
              {/* <!-- /.nav-collapse--> */}
              <div id="search-not-mobile" className="navbar-collapse collapse"></div>
              <a data-toggle="collapse" href="#search" className="btn navbar-btn btn-primary d-none d-lg-inline-block">
                <span className="sr-only">Toggle search</span>
                <i className="fa fa-search"></i>
              </a>
            </div>
        </div>
      </nav>
      <div id="search" className="collapse">
        <div className="container">
          <form role="search" className="ml-auto">
            <div className="input-group">
              <input type="text" placeholder="Search" className="form-control"></input>
              <div className="input-group-append">
                <button type="button" className="btn btn-primary"><i className="fa fa-search"></i></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Header