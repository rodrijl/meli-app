import React from 'react';
import { shallow } from 'enzyme';
import {Product} from './Product';

it('should render Product', () => {
    const history = {
        push: jest.fn()
    };
    const product = shallow(<Product history={history} product={{title: 'Puertas', id:'MLA883189865'}} last={false}/>);

    product.find('section').simulate('click');
    expect(history.push).toHaveBeenCalledTimes(1);
    expect(history.push).toHaveBeenNthCalledWith(1, '/items/MLA883189865');
    expect(product.find('img').length).toEqual(1);
    expect(product.find('hr').length).toEqual(1);
});
