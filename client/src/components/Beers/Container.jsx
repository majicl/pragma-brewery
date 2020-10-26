import React from 'react';
import { connect } from 'react-redux';

const BeerCard = ({
  name,
  temperature,
  currentTemperature,
  isOutSideOfTemerature
}) => {
  return (
    <div className="card">
      <div className="card-body text-center">
        <h5 className="mb-2 text-dark font-weight-normal">{name}</h5>
        <h2 className="mb-4 text-dark font-weight-bold">
          {currentTemperature}
          °C
        </h2>
        <div className="dashboard-progress dashboard-progress-1 d-flex align-items-center justify-content-center item-parent">
          <i className="mdi mdi-oil-temperature icon-md absolute-center text-dark" />
        </div>
        {isOutSideOfTemerature ? (
          <p
            className="mt-4 mb-0"
            style={{ backgroundColor: 'crimson', color: 'white' }}
          >
            Ouside
          </p>
        ) : (
          <p className="mt-4 mb-0">Normal</p>
        )}
        <h4 className="mb-0 mt-2 text-dark">
          <span>Condition:</span>
          {temperature.min}
          °C -{temperature.max}
          °C
        </h4>
      </div>
    </div>
  );
};

const mapStatetoProps = (state, props) => {
  const { outsideOfTemperature = [] } = state.beers;

  return {
    isOutSideOfTemerature: outsideOfTemperature.some(id => id === props.id)
  };
};
export default connect(mapStatetoProps)(BeerCard);
