import React from 'react';

export default () => (
  <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
      <a className="navbar-brand brand-logo" href="#">
        <img src="images/logo.png" alt="logo" />
      </a>
      <a className="navbar-brand brand-logo-mini" href="#">
        <img src="images/logo.png" alt="logo" />
      </a>
    </div>
    <div className="navbar-menu-wrapper d-flex align-items-stretch">
      <button
        className="navbar-toggler navbar-toggler align-self-center"
        type="button"
        data-toggle="minimize"
      >
        <span className="mdi mdi-menu" />
      </button>
    </div>
  </nav>
);
