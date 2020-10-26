import React, { useEffect, useState } from 'react';
import Container from './Container.jsx';
import { getBeers } from '../../api/beers.provider.js';

export default ({ dashboardName, sectionName }) => {
  const [beers, setBeers] = useState([]);
  useEffect(async () => {
    setBeers(await getBeers());
  }, []);
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="d-xl-flex justify-content-between align-items-start">
          <h2 className="text-dark font-weight-bold mb-2">{dashboardName}</h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="d-sm-flex justify-content-between align-items-center transaparent-tab-border">
              <ul className="nav nav-tabs tab-transparent" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="business-tab"
                    data-toggle="tab"
                    href="#business-1"
                    role="tab"
                    aria-selected="false"
                  >
                    {sectionName}
                  </a>
                </li>
              </ul>
              <div className="d-md-block d-none" />
            </div>
            <div className="tab-content tab-transparent-content">
              <div
                className="tab-pane fade show active"
                id="business-1"
                role="tabpanel"
                aria-labelledby="business-tab"
              >
                <div className="row">
                  <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                    {beers.map(beer => (
                      <Container key={beer.id} {...beer} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
