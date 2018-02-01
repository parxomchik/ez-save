import MainController from './main.controller';

export const MainComponent: ng.IComponentOptions = {
	template: require('./main.partial.html'),
	controller: MainController,
	controllerAs: 'vm'
};

