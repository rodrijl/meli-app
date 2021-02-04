import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Searchbox from './components/Searchbox';
import {BrowserRouter as Router} from "react-router-dom";

it('should render BreadMessagecrumb', () => {
    const app = shallow(<App />);
    
    expect(app.find(Searchbox).length).toEqual(1);
    expect(app.find('section').length).toEqual(1);
    expect(app.find(Router).length).toEqual(1);
});
