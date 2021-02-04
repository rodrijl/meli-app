import React from 'react';
import './styles/Message.scss';

const Message = ({text}) => (
    <div className="message">
        <h3>{text}</h3>
    </div>
);

export default Message;
