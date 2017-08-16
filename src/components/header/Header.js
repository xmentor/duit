import React from 'react';
import PropTypes from 'prop-types';
import Form from '../form/Form';
import Button from '../button/Button';
import Icon from '../icon/Icon';

import './header.css';
import logo from './duit-logo.png';

import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
    return (  
        <header className='header'>
            <div className='header__top'>
                <h1 className='header__logo'>
                    <Link to='/'><img alt={props.headerTitle} src={logo} /></Link>
                </h1>
                <Button 
                    typeButton='button'
                    classes='header__button'
                    eventButton={props.toggleLists}
                    label='Lists'
                    labelHidden={true}
                    ariaLabel='Show all lists or add a new list'
                    ariaExpanded={props.expanded}
                >
                    <Icon name='menu' />
                </Button>
            </div>
            <div className={`header__bottom ${props.expanded ? 'header__bottom_open' : ''}`}>
                <Form 
                    classes='form_list'
                    placeHolder='e.g. shop list'
                    label='Add a new list'
                    eventSubmit={props.addList}
                />
                <nav className='header__menu menu'>
                    <h2 className='sr-only'>All lists</h2>
                    <ul className='menu__lists'>
                        {props.lists.map((list) => (
                            <li key={list.id}>
                                <NavLink 
                                    activeClassName='active'
                                    to={`/list/${list.id}`}
                                >
                                    {list.name}
                                </NavLink>
                                <Button 
                                    typeButton='button'
                                    classes=''
                                    eventButton={props.removeList.bind(this, list)}
                                    label='Remove'
                                    labelHidden={true}
                                    ariaLabel={`Remove ${list.name}`}
                                >
                                    <Icon name='remove' />
                                </Button>
                            </li> 
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

Header.propTypes = {
    addList: PropTypes.func.isRequired,
    removeList: PropTypes.func.isRequired,
    toggleLists: PropTypes.func.isRequired,
    headerTitle: PropTypes.string.isRequired,
    lists: PropTypes.array.isRequired,
    expanded: PropTypes.bool.isRequired
};

export default Header;