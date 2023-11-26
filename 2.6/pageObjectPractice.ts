import {By, until, WebDriver, WebElement, Capabilities, Builder} from 'selenium-webdriver';
const chromedriver = require ('chromedriver');
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();
export class googlePage {
    //required paramaters in order to use the class outside of the page.
    driver: WebDriver;
    url: string = 'https://www.google.com/';
    //page loacators for the test
    searchBar: By = By.name('q');
    results: By = By.id('rcnt');
    //this is setting the parameters in order to use them in methods and outside the class
    constructor(driver:WebDriver, url: string) {
        this.driver = driver;
        this.url = url;
    };
    //methods specifically for google
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.searchBar));
    };
    async getElement(elementBy: By):Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementIsVisible(element));
        return element;
    };
    async sendKeys(elementBy:By, keys:any) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).sendKeys(keys);
    };
    async setInput(elementBy:By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy);
        await input.clear();
        return input.sendKeys(keys);
    };
    async search(searchTerm: string) {
        return this.setInput(this.searchBar, `${searchTerm}\n`);
    };
    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).getText();
    };
    async getResults() {
        return this.getText(this.results);
    };

    // NOW FOR THE TEST

    



















}