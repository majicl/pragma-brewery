import React from 'react';
import '@testing-library/jest-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render } from '@testing-library/react';
import Container from '~/Beers/Container.jsx';

configure({ adapter: new Adapter() });

const defaultProps = {
  id: 1,
  temperature: {
    min: -1,
    max: 3
  },
  currentTemperature: 1
};
const renderWithRedux = (
  children,
  initialState = {
    beers: {
      outsideOfTemperature: {}
    }
  },
  mockedReducer = (state) => state
) => {
  const store = createStore(mockedReducer, initialState);
  const component = <Provider store={store}>{children}</Provider>;
  return {
    ...render(component),
    component
  };
};

describe('<Container />', () => {
  it('matches snapshot on responsive', () => {
    const { container } = renderWithRedux(<Container {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Status Sould be Normal', () => {
    const { getByTestId } = renderWithRedux(<Container {...defaultProps} />);
    expect(getByTestId('status-label')).toHaveTextContent('Normal');
  });

  it('Status Sould be Normal: -1', () => {
    const { getByTestId } = renderWithRedux(<Container {...defaultProps} currentTemperature={-1} />);
    expect(getByTestId('status-label')).toHaveTextContent('Normal');
  });

  it('Status Sould be Normal: 3', () => {
    const { getByTestId } = renderWithRedux(<Container {...defaultProps} currentTemperature={3} />);
    expect(getByTestId('status-label')).toHaveTextContent('Normal');
  });

  it('Status Sould be Hot', () => {
    const { getByTestId } = renderWithRedux(<Container {...defaultProps} currentTemperature={4} />);
    expect(getByTestId('status-label')).toHaveTextContent('Hot');
  });

  it('Status Sould be Cold', () => {
    const { getByTestId } = renderWithRedux(<Container {...defaultProps} currentTemperature={-2} />);
    expect(getByTestId('status-label')).toHaveTextContent('Cold');
  });

  it('Status Sould be Normal', () => {
    const { getByTestId } = renderWithRedux(<Container {...defaultProps} />);
    const el=getByTestId('card');
    expect(el).toHaveClass('card');
    expect(el).not.toHaveClass('hot');
    expect(el).not.toHaveClass('cold');
  });

  it('Cold temperature has cold css class', () => {
    const { getByTestId } = renderWithRedux(<Container {...defaultProps} currentTemperature={-2} />);
    const el=getByTestId('card');
    expect(el).toHaveClass('card');
    expect(el).not.toHaveClass('hot');
    expect(el).toHaveClass('cold');
  });

  it('Cold temperature has Hcold css class', () => {
    const { getByTestId } = renderWithRedux(<Container {...defaultProps} currentTemperature={4} />);
    const el=getByTestId('card');
    expect(el).toHaveClass('card');
    expect(el).toHaveClass('hot');
    expect(el).not.toHaveClass('cold');
  });

});
