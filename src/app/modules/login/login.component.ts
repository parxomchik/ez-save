import controller from './login.controller';

export const LoginComponent: ng.IComponentOptions = {
	template: require('./login.partial.html'),
	controller: controller,
	controllerAs: 'vm'
}
