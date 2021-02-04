import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

it('should render Loader', () => {
    const loader = shallow(<Loader />);
    
    expect(loader.find('div').length).toEqual(1);
});
