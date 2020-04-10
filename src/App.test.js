// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react'
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer/Footer';
import BootstrapTable from 'react-bootstrap-table';
import AuditTrailDetails from './AuditTrailDetails/AuditTrailDetails'

configure({ adapter: new Adapter() })
describe('<AuditTrailPage/>', () => {


  it('should contain two table columns', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find())
  });
})

