export default class MainController {
	public searchResults: any;
	public spinner: boolean;
	public error: any;
	private reddit: any;

	constructor() {
		'ngInject';
	}

	$onInit(): void {
		this.reddit = window.reddit;
	}

	searchPosts(query: string): void {
		if (query) {
			this.spinner = true;
			this.searchResults = null;
			this.reddit
				.search(query)
				.fetch((res: any): void => {
					this.spinner = false;
					this.searchResults = res.data;
				},
				err => this.error = err.message);
		}
	}
}
