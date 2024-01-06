import React from 'react';
import head from '/images/head.jpg';
import ear from '/images/ear.jpg';
import eye from '/images/eye.jpg'
import nose from '/images/nose.jpg'
import { Link } from 'react-router-dom';


function Category() {
  return (
    <div className='px-5 mt-2'>
      <div className='d-flex justify-content-center align-items-center'>
        <h3 className="me-3">Category List</h3>
        <Link to="/dashboard/addcategory" className="btn btn-success">ADD</Link>
      </div>
      <hr></hr>
      <div className="row gx-2 gy-2">
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card w-100 p-3">
            <img src={head} className="img-fluid w-100 p-3" alt="react logo" />
            <div className="card-body">
              <h5 className="card-title">Head</h5>
              <Link to="/dashboard/commonQ" className="btn btn-success">Next</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card w-100 p-3">
            <img src={ear} className="img-fluid w-100 p-3" alt="react logo" />
            <div className="card-body">
              <h5 className="card-title">Ear</h5>
              <a href="#" className="btn btn-success">Next</a>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card w-100 p-3">
            <img src={eye} className="img-fluid w-100 p-3" alt="react logo" />
            <div className="card-body">
              <h5 className="card-title">Eye</h5>
              <a href="#" className="btn btn-success">Next</a>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card w-100 p-3 ">
            <img src={nose} className="img-fluid w-100 p-3" alt="react logo" />
            <div className="card-body">
              <h5 className="card-title">Nose</h5>
              <Link to="#" className="btn btn-success">Next</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card w-100 p-3">
            <img src={head} className="img-fluid w-100 p-3" alt="react logo" />
            <div className="card-body">
              <h5 className="card-title">Head</h5>
              <a href="#" className="btn btn-success">Next</a>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card w-100 p-5">
            <img src={head} className="img-fluid w-100 p-3" alt="react logo" />
            <div className="card-body">
              <h5 className="card-title">Head</h5>
              <a href="#" className="btn btn-success">Next</a>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card w-100 p-5">
            <img src={head} className="img-fluid w-100 p-3" alt="react logo" />
            <div className="card-body">
              <h5 className="card-title">Head</h5>
              <a href="#" className="btn btn-success">Next</a>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card w-100 p-5">
            <img src={head} className="img-fluid w-100 p-3" alt="react logo" />
            <div className="card-body">
              <h5 className="card-title">Head</h5>
              <a href="#" className="btn btn-success">Next</a>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card w-100 p-5">
            <img src={head} className="img-fluid w-100 p-3" alt="react logo" />
            <div className="card-body">
              <h5 className="card-title">Head</h5>
              <a href="#" className="btn btn-success">Next</a>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card w-100 p-5">
            <img src={head} className="img-fluid w-100 p-3" alt="react logo" />
            <div className="card-body">
              <h5 className="card-title">Head</h5>
              <a href="#" className="btn btn-success">Next</a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Category;
