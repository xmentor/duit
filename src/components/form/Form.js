import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import Icon from '../icon/Icon';

import './form.css';

const Form = (props) => {
    return (
        <form data-id={props.id} className={`form ${props.classes}`} onSubmit={props.eventSubmit}>
            <div className='form__row'>
                <label className='form__label'>
                    <span className='sr-only'>
                        {props.label}
                    </span>
                    <input 
                        type='text' 
                        aria-invalid='false' 
                        aria-required='true'
                        placeholder={props.placeHolder}
                        className='form__input'
                    />
                </label>
                <Button 
                    typeButton='submit'
                    classes='button_icon'
                    label={props.label}
                    labelHidden={true} 
                >
                    <Icon name="add"/>
                </Button>
            </div>
        </form>
    );
};

Form.propTypes = {
    id: PropTypes.number,
    classes: PropTypes.string.isRequired,
    placeHolder: PropTypes.string,
    label: PropTypes.string.isRequired,
    eventSubmit: PropTypes.func.isRequired
};

export default Form;