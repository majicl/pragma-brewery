import React, { Fragment } from 'react';
import Navbar from '~/Navbar/index.jsx';
import Sidebar from '~/Sidebar/index.jsx';
import BeerContainers from '~/Beers/Containers.jsx';

export default () => {
  const menuItems = [
    {
      title: 'Dashboard',
      uri: '/'
    }
  ];

  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid page-body-wrapper">
        <Sidebar menuName="Main" menuItems={menuItems} />
        <BeerContainers
          dashboardName="Beers Temperature Monitor"
          sectionName="Beers"
        />
      </div>
    </Fragment>
  );
};
