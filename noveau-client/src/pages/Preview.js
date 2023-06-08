function Preview() {
    return (
        <div id="all">
      <div id="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              {/* <!-- breadcrumb--> */}
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li aria-current="page" class="breadcrumb-item active">Detail</li>
                </ol>
              </nav>
            </div>  
            <div id="checkout" class="col-lg-12">
              <div class="box">
              <div class="col-lg-9 order-1 order-lg-2">
                <div id="productMain" class="row">
                  <div class="col-md-6">
                    <div data-slider-id="1" class="owl-carousel shop-detail-carousel" />
                  </div>
                  {/* <!--
                    image utama
____________________________________________________________
                    --> */}
                  <div class="container" ><img width="100%" height="100%" src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                  </div>
                </div>  

{/* <!-- 
DETAILS
_________________________________________________________
--> */}
                <div id="details" class="box">
                  <p></p>
                  <h3>Nama Art</h3>
                  <ul>
                  <li>Address Artist:</li>
                  <li>Picture ID</li>
                  <li>Total Donasi yang terkumpul</li>
                  </ul>
                  <hr />

                  <div class="social" ><center>
                    <button href="checkout1.html" class="btn btn-primary">Donasi!<i ></i></button>
                    <h4>atau</h4>
                    <h4>bagikan ke teman!</h4>
                    <p><a href="#" class="external facebook"><i class="fa fa-facebook"></i></a><a href="#" class="external gplus"><i class="fa fa-google-plus"></i></a><a href="#" class="external twitter"><i class="fa fa-twitter"></i></a><a href="#" class="email"><i class="fa fa-envelope"></i></a></p>
                  </center></div>
                  
                </div>
                {/* <!-- COMMENTS --> */}
                <div class="col-md-3 col-sm-6">
                  <div class="product same-height">
                    <div class="flip-container">
                    </div><a href="detail.html" class="invisible"><img src="img/product1.jpg" alt="" dclass="img-fluid" /></a>
                    <div class="text">
                      <h3>User</h3>
                      <p class="donasi">Eth. 100.000</p>
                      <p class="text">komentar</p>
                    </div>
                  </div>



                </div>
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