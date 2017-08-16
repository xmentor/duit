import React from 'react';
import PropTypes from 'prop-types';

import './status.css';

const Status = (props) => {
    return (
        <div 
            className='sr-only'
            role='status'
            aria-live="polite"
        >
            {props.status.info}
        </div>
    );
};

Status.propTypes = {
    status: PropTypes.object.isRequired
};

export default Status;

/*
    return (
        <div 
            className={`status ${props.status.isVisble ? (props.status.isError ? 'status_error' : 'status_success') : ''}`}
            role='status'
            aria-live="polite"
        >
            {props.status.info}
        </div>
    );

*/