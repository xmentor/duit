import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import Home from './Home';
import NotFound from './NotFound';

import { Route, Switch } from 'react-router-dom';

import './main.css';

const Main = (props) => {
    return (
        <main className='main'>
            <Switch>
               <Route 
                    exact
                    path="/" 
                    component={Home}
                />
                <Route 
                    path="/list/:id" 
                    render={({match}) => (
                        <ListItem
                            addTask={props.addTask}
                            list={props.lists.filter((item) => {
                                return item.id === Number(match.params.id);
                            })}
                            removeTask={props.removeTask}
                            toggleCompletedTask={props.toggleCompletedTask}
                        /> 
                    )}
                />
                <Route component={NotFound} />   
            </Switch>
        </main>
    );
};

Main.propTypes = {
    lists: PropTypes.array.isRequired,
    addTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
    toggleCompletedTask: PropTypes.func.isRequired,
};

export default Main;