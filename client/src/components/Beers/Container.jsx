import React from 'react';
import { connect } from 'react-redux';
import './Container.scss';

const BeerCard = ({
  name,
  temperature,
  currentTemperature,
  status = Status.NORMAL,
}) => {
  const statusToClass = () => {
    if (status === Status.COLD) {
      return 'cold';
    }
    if (status === Status.HOT) {
      return 'hot';
    }
    return '';
  };

  return (
    <div data-testid="card" className={`card ${statusToClass()}`}>
      <div className="card-body text-center">
        <h5 className="mb-2 text-dark font-weight-normal">{name}</h5>
        <h2 className="mb-4 text-dark font-weight-bold">
          {currentTemperature}
          °C
        </h2>
        <div className="dashboard-progress dashboard-progress-1 d-flex align-items-center justify-content-center item-parent">
          <i className="mdi mdi-oil-temperature icon-md absolute-center text-dark" />
        </div>
        <p className="mt-4 mb-0 status-label" data-testid="status-label">
          {status.description}
        </p>
        <h4 className="mb-0 mt-2 text-dark">
          <span>Condition:</span>
          {temperature.min}
          °C
          <span> - </span>
          {temperature.max}
          °C
        </h4>
      </div>
    </div>
  );
};

const Status = Object.freeze({
  HOT: Symbol('Hot'),
  COLD: Symbol('Cold'),
  NORMAL: Symbol('Normal'),
});

const isOutsideTemperature = (currentTemperature, temperatureRange) =>
  currentTemperature < temperatureRange.min ||
  currentTemperature > temperatureRange.max;

const getTemperatureStatus = (currentTemperature, temperatureRange) => {
  if (!isOutsideTemperature(currentTemperature, temperatureRange)) {
    return Status.NORMAL;
  }
  if (currentTemperature < temperatureRange.min) {
    return Status.COLD;
  }
  return Status.HOT;
};

function mapStatetoProps(state, props) {
  const { outsideOfTemperature } = state.beers;
  const currentTemperature =
    outsideOfTemperature[props.id] || props.currentTemperature;

  return {
    status: getTemperatureStatus(currentTemperature, props.temperature),
    currentTemperature,
  };
}
export default connect(mapStatetoProps)(BeerCard);
