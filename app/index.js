/*
  Focused
  Independent
  Reusable
  Small
  Testable
*/
var sentryKey = 'cd85bf9a229b46cab574d99c6b189e51';
var sentryApp = '91646';
var sentryURL = 'https://'+ sentryKey + '@app.getsentry.com/'+ sentryApp;
var _APP_INFO = {
	name:'Github Battle',
	branch:'video 4',
	version:'1.0'
};

var Raven = require('raven-js');

var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

Raven.config(sentryURL, {
	release: _APP_INFO.version,
	tags:{
		branch: _APP_INFO.branch,
	}
}).install();

ReactDOM.render(
	routes, document.getElementById('app')
);