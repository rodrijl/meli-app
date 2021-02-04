import React from 'react';
import { shallow } from 'enzyme';
import ProductDetails from './ProductDetails';

it('should render ProductDetails', () => {
    const productDetails = shallow(<ProductDetails match={{params: {id: 'MLA883189865'}}}/>);
    expect(productDetails).toEqual({});
});
