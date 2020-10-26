import React from 'react';

export default ({ MenuName, MenuItems = [] }) => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-category">{MenuName}</li>

        {MenuItems.map((item) => (
          <li className="nav-item">
            <a className="nav-link" href={item.uri}>
              <span className="icon-bg">
                <i className="mdi mdi-cube menu-icon" />
              </span>
              <span className="menu-title">{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
