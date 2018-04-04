import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
//import '../style/style.css';
//import '../style/bootstrap.min.css';
//window.jQuery = window.$ = require('../Scripts/jquery-1.10.2');
//require('../Scripts/bootstrap');

ReactDom.render(<App />, document.getElementById('content'));
var div = $(".ContactView-title");
$(div).fadeOut();
$(div).fadeIn(3500, "linear", null);