import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

it('should render BreadMessagecrumb', () => {
    const message = shallow(<Message text={'Electronicos, Audio y Video'}/>);
    
    expect(message.find('h3').length).toEqual(1);
    expect(message.find('h3').text()).toEqual('Electronicos, Audio y Video');
});
