import React from 'react';
import { shallow } from 'enzyme';
import {Searchbox} from './Searchbox';

it('should render Searchbox', () => {
    const history = {
        push: jest.fn()
    };

    const searchbox = shallow(<Searchbox history={history}/>);
    searchbox.find('button').simulate('click');

    expect(history.push).toHaveBeenCalledTimes(1);
    expect(history.push).toHaveBeenNthCalledWith(1, '/items?q=');

    expect(searchbox.find('input').length).toEqual(1);
    expect(searchbox.find('button').length).toEqual(1);
});
