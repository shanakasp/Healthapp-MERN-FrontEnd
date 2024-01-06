import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";


function Dashboard() {
  return (
    <div className='container-fluid'>
      <div className='row flex-nowrap position-sticky'>
        <div className='col-auto col-md-2 col-x1-2 px-sm-2 px-0 bg-dark position-sicky'>
          <div className='d-flex flex-column position-relative align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>



            <ul className='nav nav-pills flex-column align-items-center mb-sm-auto mb-0 position-absolute top-5 start-0 position-fixed ' id='menu'>
              <li className='w-100'>
                <Link
                  to="/dashboard" className='nav-link text-white px-0 align-midle'>
                  <i className='fs-4 bi-speedometer2 ms-2'></i>
                  <span className='ms-2 d-none d-sm-inline'>Dashboard </span>
                </Link>
              </li>

              <li className='w-100'>
                <Link
                  to="/dashboard/category"
                  className='nav-link px-0 align-middle text-white'>
                  <i className='fs-4 bi-columns ms-2'></i>
                  <span className='ms-2 d-none d-sm-inline'>Category</span>
                </Link>
              </li>

              <li className='w-100'>
                <Link
                  to="/dashboard/profile"
                  className='nav-link px-0 align-middle text-white'>
                  <i className='fs-4 bi-person ms-2'></i>
                  <span className='ms-2 d-none d-sm-inline'>Profile</span>
                </Link>
              </li>

              <li className='w-100'>
                <Link
                  className='nav-link px-0 align-middle text-white'>
                  <i className='fs-4 bi-power ms-2'></i>
                  <span className='ms-2 d-none d-sm-inline'>Log out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='col p-0 m-0'>
          <nav className="navbar bg-body-tertiary  ">
            <div className="container-fluid position-sticky ">
            <a className="navbar-brand fs-3 fst-italic fw-bold text-success">Dr.PREDICTOR</a>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </nav>
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;



