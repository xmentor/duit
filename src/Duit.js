import React from 'react';
import LocalStorage from './components/storage/LocalStorage';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Status from './components/status/Status';
import List from './components/List';
import Task from './components/Task';

import {HashRouter} from 'react-router-dom';

class Duit extends React.Component {
    constructor(props) {
        super(props);
        this.storage = new LocalStorage('duit');
        this.state = {
            lists: this.storage.load(),
            status: {
                /* it will be improve
                isError: false,
                isVisible: false,
                */
                info: ''
            },
            expanded: false
        }
        this.addList = this.addList.bind(this);
        this.addTask = this.addTask.bind(this);
        this.toggleCompletedTask = this.toggleCompletedTask.bind(this);
        this.removeList = this.removeList.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.toggleLists = this.toggleLists.bind(this);
    }
    saveLists(lists) {
        this.storage.save(lists);
    }
    
    isValid(data) {
        const isNotEmpty = data.trim().length > 0 ? true : false;
        return isNotEmpty;
    }
    addList(e) {
        const inputForm = e.target[0];
        const isValid = this.isValid(inputForm.value);
        if(isValid) {
            const newList = new List({
                name: inputForm.value
            });
            this.state.lists.push(newList);

            this.setState({
                lists: this.state.lists,
                status: {
                    /*
                    isError: false,
                    isVisible: true,
                    */
                    info: `Added a new list - ${inputForm.value}`,
                }
            });

            inputForm.value = '';
            this.saveLists(this.state.lists);
        } else {
            this.setState({
                status: {
                    /*
                    isError: true,
                    isVisible: true,
                    */
                    info: `Please, fill out this field`
                }
            });
            inputForm.focus();
        }
        inputForm.setAttribute('aria-invalid', !isValid);
        e.preventDefault();
    }
    addTask(e) {
        const inputForm = e.target[0];
        const isValid = this.isValid(inputForm.value);
        if(isValid) {
            const idList = Number(e.target.dataset.id);
            const newTask = new Task({
                name: inputForm.value
            });
            
            const ourList = this.state.lists.filter((list) => {
                return list.id === idList; 
            });
            
            ourList[0].tasks.push(newTask);

            this.setState({
                lists: this.state.lists,
                status: {
                    /*
                    isError: false,
                    isVisible: true,
                    */
                    info: `Added a new task - ${inputForm.value} to ${ourList[0].name}`
                }
            });

            inputForm.value = '';
            this.saveLists(this.state.lists);
        } else {
            this.setState({
                status: {
                    /*
                    isError: true,
                    isVisible: true,
                    */
                    info: 'Please, fill out this field'
                }
            });
            inputForm.focus();
        }
        inputForm.setAttribute('aria-invalid', !isValid);
        e.preventDefault();
    }
    toggleCompletedTask(listID, taskID) {
        this.state.lists.forEach((list) => {
            if(list.id === listID) {
                list.tasks.forEach((task) => {
                    if(task.id === taskID) {
                        task.isCompleted = !task.isCompleted;
                    } 
                });
            }
        });
        this.setState({
            lists: this.state.lists
        });
        this.saveLists(this.state.lists);
    }
    removeList(list) {
        const newLists = this.state.lists.filter((item) => {
            return item.id !== list.id; 
        });
        
        this.setState({
            lists: newLists,
            status: {
                /*
                isError: false,
                isVisible: true,
                */
                info: `Removed ${list.name}`
            }
        });
        this.saveLists(newLists);
    }
    removeTask(listID, taskID) {
        let newStatus = ''
        this.state.lists.forEach((list) => {
            if(list.id === listID) {
                list.tasks.forEach((task, i) => {
                    if(task.id === taskID) {
                        list.tasks.splice(i, 1);
                        newStatus = `Removed ${task.name} from ${list.name}`;
                    } 
                });
            }
        });
        this.setState({
            lists: this.state.lists,
            status: {
                /*
                isError: false,
                isVisible: true,
                */
                info: newStatus
            }
        });
        this.saveLists(this.state.lists);
    }
    toggleLists() {
        const expanded = !this.state.expanded;
        this.setState({
            expanded
        });
    }
    render() {
        return (
            <HashRouter>
                <div className='duit-container'>
                    <Header 
                        lists={this.state.lists}
                        addList={this.addList}
                        removeList={this.removeList}
                        toggleLists={this.toggleLists} 
                        headerTitle='DuIt'
                        expanded={this.state.expanded}
                    />
                    <Main 
                        lists={this.state.lists}
                        addTask={this.addTask}
                        removeTask={this.removeTask}
                        toggleCompletedTask={this.toggleCompletedTask}
                    />    
                    <Status
                        status={this.state.status}
                    />
                </div>
            </HashRouter>
        );
    }
}

export default Duit;