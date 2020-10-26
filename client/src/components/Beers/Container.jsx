import React from 'react';

const BeerCard = beer => {
  return (
    <div className="card">
      <div className="card-body text-center">
        <h5 className="mb-2 text-dark font-weight-normal">{beer.name}</h5>
        <h2 className="mb-4 text-dark font-weight-bold">
          {beer.currentTemperature}
          °C
        </h2>
        <div className="dashboard-progress dashboard-progress-1 d-flex align-items-center justify-content-center item-parent">
          <i className="mdi mdi-oil-temperature icon-md absolute-center text-dark" />
        </div>
        <p className="mt-4 mb-0">Normal</p>
        <h4 className="mb-0 mt-2 text-dark">
          <span>Condition:</span>
          {beer.temperature.min}
          °C -{beer.temperature.max}
          °C
        </h4>
      </div>
    </div>
  );
};

export default BeerCard;
