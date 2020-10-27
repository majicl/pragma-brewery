import React from 'react';
import '@testing-library/jest-dom';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, queryHelpers } from '@testing-library/react';
import Sidebar from '~/Sidebar/index.jsx';

configure({ adapter: new Adapter() });
const queryByClassName = queryHelpers.queryByAttribute.bind(null, 'class');

describe('<Sidebar />', () => {
  it('matches snapshot on responsive', () => {
    const { container } = render(<Sidebar />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('The category navigation is empty if MenuName is not set', () => {
    const {
      container: { firstChild: sidebar }
    } = render(<Sidebar />);

    const menuTag = queryByClassName(sidebar, 'nav-item nav-category');
    expect(menuTag).not.toBeNull();
    expect(menuTag).toBeEmptyDOMElement();
  });

  it('The category navigation matches the MenuName', () => {
    const menuName = 'Dashboard';
    const {
      container: { firstChild: sidebar }
    } = render(<Sidebar menuName={menuName} />);

    const menuTag = queryByClassName(sidebar, 'nav-item nav-category');
    expect(menuTag).not.toBeNull();
    expect(menuTag).toHaveTextContent(menuName);
  });

  it('The empty MenuItems does not render any menu', () => {
    const {
      container: { firstChild: sidebar }
    } = render(<Sidebar />);

    const navTags = queryByClassName(sidebar, 'nav-item');
    expect(navTags).toBeNull();
  });

  it('The items in MenuItems render in menus', () => {
    const menuItems = [
      {
        title: 'Dashboard',
        uri: '/'
      },
      {
        title: 'Beers',
        uri: '/beers'
      }
    ];
    const sidebar = mount(<Sidebar menuItems={menuItems} />);
    expect(sidebar.find('.nav-item')).toHaveLength(3);
  });
});
