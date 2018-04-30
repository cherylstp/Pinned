import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GoogleMaps from './Home/GoogleMaps';
import registerServiceWorker from './registerServiceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<App />, document.getElementById('root'));


registerServiceWorker();
