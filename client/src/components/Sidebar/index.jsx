import React from 'react';

export default ({ menuName, menuItems = [] }) => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-category">{menuName}</li>

        {menuItems.map((item, index) => (
          <li className="nav-item" key={index}>
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
