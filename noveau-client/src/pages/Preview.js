import { useContractRead, useContractWrite } from 'wagmi'
import { contractAddress, jsonABI } from '../ABI/donationsABI'
import { Link, useParams } from "react-router-dom";
/* global BigInt */

function Preview() {
    let { pictureId } = useParams();
    const { data: pictureData, isError: pictureError, isLoading: pictureLoading } = useContractRead({
        address: contractAddress,
        abi: jsonABI,
        functionName: 'getPictureData',
        args: [pictureId],
    });
    const { data: commentData, isError: commentError, isLoading: commentLoading  } = useContractRead({
        address: contractAddress,
        abi: jsonABI,
        functionName: 'getAllCommentFromPicture',
        args: [pictureId],
    });

    if(pictureLoading){
        var message = "Getting Data...";
        return(
            <div id="all">
            <div id="content">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    {/* <!-- breadcrumb--> */}
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li aria-current="page" className="breadcrumb-item active">Detail</li>
                        </ol>
                    </nav>
                    </div>  
                    <div id="checkout" className="col-lg-12">
                <div className="box">
                    <div className="col-lg-9 order-1 order-lg-2">{message}</div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        )
    }

    if(pictureError){
        var message = "Error!";
        return(
            <div id="all">
            <div id="content">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    {/* <!-- breadcrumb--> */}
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li aria-current="page" className="breadcrumb-item active">Detail</li>
                        </ol>
                    </nav>
                    </div>  
                    <div id="checkout" className="col-lg-12">
                <div className="box">
                    <div className="col-lg-9 order-1 order-lg-2">{message}</div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
    
    const comments = [];
    if(commentLoading){
        comments.push(<div className="col-md-3 col-sm-6">
            <div className="product same-height">
            <div className="flip-container">
            </div><a href="detail.html" className="invisible"><img src="img/product1.jpg" alt="" className="img-fluid" /></a>
            <div className="text">
                <h3>Getting Data...</h3>
            </div>
            </div>
            </div>
        )
    }
    if(commentError){
        comments.push(<div className="col-md-3 col-sm-6">
            <div className="product same-height">
            <div className="flip-container">
            </div><a href="detail.html" className="invisible"><img src="img/product1.jpg" alt="" className="img-fluid" /></a>
            <div className="text">
                <h3>Error!</h3>
            </div>
            </div>
            </div>
        )
    }

    for (let index = 0; index < commentData.length; index++) {
        if(commentData[index].hidden){
            continue;
        }
        comments.push(
            // <Header key={index} />
            <div className="col-md-3 col-sm-6">
                <div className="product same-height">
                <div className="flip-container">
                </div><a href="detail.html" className="invisible"><img src="img/product1.jpg" alt="" className="img-fluid" /></a>
                <div className="text">
                    <h3>{commentData[index].wallet}</h3>
                    <p className="donasi">{commentData[index].value} ETH</p>
                    <p className="text">{commentData[index].content}</p>
                </div>
                </div>
            </div>
        );
    }

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
                  <li aria-current="page" className="breadcrumb-item active">Detail</li>
                </ol>
              </nav>
            </div>  
            <div id="checkout" className="col-lg-12">
              <div className="box">
              <div className="col-lg-9 order-1 order-lg-2">
                <div id="productMain" className="row">
                  <div className="col-md-6">
                    <div data-slider-id="1" className="owl-carousel shop-detail-carousel" />
                  </div>
                  {/* <!--
                    image utama
____________________________________________________________
                    --> */}
                  <div className="container" ><img width="100%" height="100%" src={pictureData.downloadURL} />
                  </div>
                </div>  

{/* <!-- 
DETAILS
_________________________________________________________
--> */}
                <div id="details" className="box">
                  <p></p>
                  <h3>{pictureData.title}</h3>
                  <ul>
                  <li>Address Artist: {pictureData.publisherWallet}</li>
                  <li>Picture ID: {pictureId}</li>
                  <li>Total Donasi: {pictureData.totalValue}</li>
                  </ul>
                  <hr />

                  <div className="social" ><center>
                    <Link to={`../checkout/${pictureId}`}>
                        <button className="btn btn-primary">Donasi!<i ></i></button>
                    </Link>
                    <h4>atau</h4>
                    <h4>bagikan ke teman!</h4>
                    <p>
                        <a href="#" className="external facebook"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="external gplus"><i className="fa fa-google-plus"></i></a>
                        <a href="#" className="external twitter"><i className="fa fa-twitter"></i></a>
                        <a href="#" className="email"><i className="fa fa-envelope"></i></a>
                    </p>
                  </center></div>
                  
                </div>
                {/* <!-- COMMENTS --> */}
                {comments}
                {/* <div className="col-md-3 col-sm-6">
                  <div className="product same-height">
                    <div className="flip-container">
                    </div><a href="detail.html" className="invisible"><img src="img/product1.jpg" alt="" className="img-fluid" /></a>
                    <div className="text">
                      <h3>User</h3>
                      <p className="donasi">Eth. 100.000</p>
                      <p className="text">komentar</p>
                    </div>
                  </div>
                </div> */}
                
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
    )
}

export default Preview