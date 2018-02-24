import * as angular from 'angular';
import 'angular-ui-bootstrap';
import 'angular-spinner';


import { LoginComponent } from './login.component';
import { APP_NAME } from '../../config/app.config';
import routes from './login.routes';

const module: ng.IModule = angular.module(`${APP_NAME}.login`,
	[
		'ui.router',
		'ui.bootstrap',
		'angularSpinner'
	]);

module.config(routes);

module.component('dd-login', LoginComponent);

export default (<ng.IModule>module).name;
