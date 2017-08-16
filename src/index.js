import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Duit from './Duit';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Duit />, document.getElementById('duit'));
registerServiceWorker();
