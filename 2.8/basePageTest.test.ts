import {Builder, By, Capabilities, until, WebElement, WebDriver, Actions} from 'selenium-webdriver';
const chromedriver = require('chromedriver');

interface Options {
    driver?: WebDriver;
    // if no driver is supplied we make one or use the one in our constructor.
    url?: string;
    //if no url is supplies we give it one or pass back an error.
};

export class baseGooglePage {
    driver: WebDriver;
    url: string;

    constructor(options?: Options) {
        if (options && options.driver) this.driver = options.driver
        else
        this.driver = new Builder().withCapabilities(Capabilities.chrome()).build();
        if(options && options.url) this.url = options.url

    };
    async navigate(url?: string): Promise<void> {
        if (url) return await this.driver.get(url) //! this is when URL is given in the test i.e page.navigate(www.whatever.co)
        else if (this.url) return await this.driver.get(this.url) //! this is when the URL is given in the page object. 'this' is referring to class.
        else
        return Promise.reject('BasePage needs a URL in the test or the page object.')
    };
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementIsVisible(element));
        return element;

    };
    async click(elementBy: By): Promise<void> {
        return (await this.getElement(elementBy)).click();
    };
    async setInput(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy);
        await input.clear();
        return input.sendKeys(keys);
    } ;
    async getText(elementBy: By): Promise<string> {
        return (await this.getElement(elementBy)).getText();

    };
    async getAtrribute(elementBy: By, attribute: string): Promise<string> {
        return (await this.getElement(elementBy)).getAttribute(attribute);
    };
    //? ACTIONS TEMPLATE
    actionWiggle(actions: Actions, originElement: WebElement, moveDurationMS: number = 100): Actions {
        return actions.move({origin: originElement, duration: moveDurationMS})
        .move({origin: originElement, x: 10, y:0, duration: moveDurationMS})
        .move({origin: originElement, x:0, y:10, duration: moveDurationMS})
        .move({origin: originElement, x:10, y:0, duration: moveDurationMS})
        .move({origin: originElement, x:0, y:10, duration: moveDurationMS})
        .pause(moveDurationMS)
    };







}