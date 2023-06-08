function Footer() {

  return (
    <div>
      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <h4 className="mb-3">Halaman</h4>
              <ul className="list-unstyled">
                <li><a href="index.html" className="nav-link">homepage</a></li>
                <li><a href="history.html" className="nav-link">transaksiku</a></li>
              </ul>
              
              <h4 className="mb-3">Tugas Akhir Blockchain</h4>
            </div>
          </div>
        </div>
      </div>
      
      <script type="text/jsx" src="vendor/jquery/jquery.min.js" />
      <script type="text/jsx" src="vendor/bootstrap/js/bootstrap.bundle.min.js" />
      <script type="text/jsx" src="vendor/jquery.cookie/jquery.cookie.js" />
      <script type="text/jsx" src="vendor/owl.carousel/owl.carousel.min.js" />
      <script type="text/jsx" src="vendor/owl.carousel2.thumbs/owl.carousel2.thumbs.js" />
      <script type="text/jsx" src="js/front.js" />
    </div>
  )
}

export default Footer