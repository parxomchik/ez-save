import * as angular from 'angular';

import { APP_NAME } from './config/app.config';

import coreModule from './core/core.module';

import mainModule from './modules/main/main.module';

export default angular.module(APP_NAME, [
	coreModule,
	mainModule
])
	.name;
