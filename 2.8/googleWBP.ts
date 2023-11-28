import {By} from 'selenium-webdriver';
import { baseGooglePage } from './basePageTest.test'; //? Base Page has the functions and everything we needed to create our class Google

export class Google extends baseGooglePage {
    searchBar: By = By.name('q');
    results: By = By.id('rcnt');
    constructor(){
        super({url: 'https://www.google.com/'}); //? you need the super to use the constructor
    };
    async search(searchThing: string) {
        return this.setInput(this.searchBar, `${searchThing}\n`);
    };
    async getResults() {
        return this.getText(this.results)
    };
};
// "this." is meaning the class it is in. 