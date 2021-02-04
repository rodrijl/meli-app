import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb from './Breadcrumb';

it('should render Breadcrumb', () => {
    const breadcrumb = shallow(<Breadcrumb filters={['Electronicos, Audio y Video', 'Reproductores']}/>);
    
    expect(breadcrumb.find('p').length).toEqual(1);
    expect(breadcrumb.find('p').text()).toEqual('Electronicos, Audio y Video > Reproductores');
});
