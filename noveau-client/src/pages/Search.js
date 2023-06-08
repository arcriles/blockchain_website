import { Link } from "react-router-dom";
import { useState } from "react";

function Search() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
      <div id="search" className="">
        <div className="container">
          <form role="search" className="ml-auto">
            <div className="input-group">
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="form-control" 
                    name="pictureId" 
                    value={inputs.pictureId || ""} 
                    onChange={handleChange}
                />
              <div className="input-group-append">
                <Link to={`../preview/${inputs.pictureId}`}>
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