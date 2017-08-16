import React from 'react';
import PropTypes from 'prop-types';

import './icon.css';

const Icon = (props) => {
    return (
        <span className={`icon icon-${props.name}`}></span>
    );
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Icon;