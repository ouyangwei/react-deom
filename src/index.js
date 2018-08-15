import React from 'react';

import ReactDOM from 'react-dom';

import './modules/config'

import 'swiper/dist/css/swiper.min.css'

import './stylesheets/main.scss'

import { 
    HashRouter as Router
} from 'react-router-dom'

import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root'));

registerServiceWorker();
