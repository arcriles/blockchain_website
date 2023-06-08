function Home() {
    return (
        <div>
            <div id="all">
                <div id="content">
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                        {/* <!-- breadcrumb--> */}
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li aria-current="page" class="breadcrumb-item active"><i>Geser gambar untuk melihat</i></li>
                            </ol>
                        </nav>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div id="hot">
                <div class="box py-4">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                        <h2 class="mb-0">Hot this week</h2>
                        </div>
                        <div class="container">
                        <div class="col-md-12">
                            <div class="box slideshow">
                            <h3>Get Inspired</h3>
                            <p class="lead">Get the inspiration from our world class designers</p>
                            <div id="get-inspired" class="owl-carousel owl-theme">
                                <div class="item"><a href="detail.html"><img src="img/getinspired1.jpg" alt="Get inspired" class="img-fluid" /></a></div>
                                <div class="item"><a href="detail.html"><img src="img/getinspired2.jpg" alt="Get inspired" class="img-fluid" /></a></div>
                                <div class="item"><a href="detail.html"><img src="img/getinspired3.jpg" alt="Get inspired" class="img-fluid" /></a></div>
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

export default Home