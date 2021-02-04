import React from 'react';
import './styles/Breadcrumb.scss';

const Breadcrumb = ({filters = []}) => (
    <div className="breadcrumb">
        <p>{filters.join(' > ')}</p>
    </div>
);

export default Breadcrumb;
