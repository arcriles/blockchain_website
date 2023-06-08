import { Link } from "react-router-dom";

function Search() {
    return (
      <div id="search" className="">
        <div className="container">
          <form role="search" className="ml-auto">
            <div className="input-group">
              <input type="text" placeholder="Search" className="form-control"></input>
              <div className="input-group-append">
                <Link to="../preview">
                    <button type="button" className="btn btn-primary"><i className="fa fa-search"></i></button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Search