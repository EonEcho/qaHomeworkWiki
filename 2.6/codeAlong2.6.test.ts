import {Builder, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver';
const chromedriver = require('chromedriver');
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

class employeePO {
    driver: WebDriver;
    url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
    //locators come next
    header: By = By.css('.titleText');
    addEmployee: By = By.name('addEmployee');
    newEmployee: By= By.xpath('(//Li[@class="listText"])[11]');
    nameInput: By = By.name('nameEntry');
    phoneInput: By = By.name('phoneEntry');
    titleInput: By = By.name('titleEntry');
    saveBtn: By = By.id('saveBtn');

    constructor(driver: WebDriver) {
        this.driver = driver;
    
    };
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.header));
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
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy)); 
        return (await this.driver.findElement(elementBy)).click();
    }; 
    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy)); 
        return this.driver.findElement(elementBy).getText(); 
    }; 
    





};

const emPage = new employeePO(driver);

describe("practiving page objects", () => {
    beforeEach(async () => {
        await emPage.navigate();
    });
    afterAll(async () => {
        await emPage.driver.quit();
    });

    test(' Adding an Employee', async () => {
        await emPage.click(emPage.addEmployee);
        await emPage.click(emPage.newEmployee);
        await emPage.setInput(emPage.nameInput, "Test Name");
        await emPage.setInput(emPage.phoneInput, 1234567890);
        await emPage.setInput(emPage.titleInput, "CEO of CEO");
        await emPage.click(emPage.saveBtn);
    });
});