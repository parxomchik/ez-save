import * as angular from 'angular';
import 'angular-ui-bootstrap';
import 'reddit.js';
import 'angular-spinner';


import { MainComponent } from './main.component';
import { APP_NAME } from '../../config/app.config';
import routes from './main.routes';

const module: ng.IModule = angular.module(`${APP_NAME}.main`,
	[
		'ui.router',
		'ui.bootstrap',
		'angularSpinner'
	]);

module.config(routes);

module.component('ddApp', MainComponent);

export default (<ng.IModule>module).name;
