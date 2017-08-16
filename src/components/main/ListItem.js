import React from 'react';
import PropTypes from 'prop-types';
import Form from '../form/Form';
import Button from '../button/Button';
import Icon from '../icon/Icon';

import {Redirect} from 'react-router-dom';

const ListItem = (props) => {
    const ourList = props.list[0] || null;
    return (
        ourList === null ? (
            <Redirect to="/"/>
        ) : (
            <article className='list'>
                <div className='list__header'>
                    <h2 className='list__name'>{ourList.name}</h2>
                    <Form 
                        id={ourList.id}
                        classes='form_task'
                        placeHolder='e.g. onion or something to do'
                        label='Add new task'
                        eventSubmit={props.addTask}
                    />
                </div>
                <ul className='list__tasks'>
                    {ourList.tasks.map((task) => (
                        <li key={task.id} className={`list__task ${task.isCompleted ? 'list__task_completed' : ''} task`}>
                            <label className=''>
                                {task.isCompleted ? (
                                    <input type="checkbox" onChange={props.toggleCompletedTask.bind(this, ourList.id, task.id)} checked />
                                ) : (
                                    <input type="checkbox" onChange={props.toggleCompletedTask.bind(this, ourList.id, task.id)} />
                                )}
                                <span className='task__name'>{task.name}</span>
                            </label>
                            <Button 
                                typeButton='button'
                                classes='task__button'
                                eventButton={props.removeTask.bind(this, ourList.id, task.id)}
                                label='Remove'
                                labelHidden={true}
                                ariaLabel={`Remove ${task.name}`}
                            >
                                <Icon name='remove-task'></Icon>
                            </Button>
                        </li>
                    ))}
                </ul>
            </article>)
    );
};

ListItem.propTypes = {
    list: PropTypes.array.isRequired,
    addTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
    toggleCompletedTask: PropTypes.func.isRequired,
};

export default ListItem;