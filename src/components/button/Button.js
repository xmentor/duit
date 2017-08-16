import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = (props) => {
    return (
        <button 
            type={props.typeButton}
            className={props.classes !== '' ? `button ${props.classes}` : 'button'}
            onClick={props.eventButton}
            aria-label={props.ariaLabel}
            aria-expanded={props.ariaExpanded}
        >
            {props.labelHidden ? <span className='sr-only'>{props.label}</span > : props.label}
            {props.children}
        </button>
    );
}

Button.propTypes = {
    typeButton: PropTypes.string.isRequired,
    classes: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    labelHidden: PropTypes.bool.isRequired,
    eventButton: PropTypes.func,
    children: PropTypes.node,
    ariaLabel: PropTypes.string,
    ariaExpanded: PropTypes.bool,
};

export default Button;