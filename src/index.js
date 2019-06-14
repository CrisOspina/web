import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../src/pages/home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Home />, 
  document.getElementById('root'));

serviceWorker.unregister();
