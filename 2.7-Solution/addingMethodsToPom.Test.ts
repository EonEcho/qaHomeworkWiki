import {Builder, By, Capabilities, until, WebDriver, WebElement} from "selenium-webdriver";
const chromedriver = require('chromedriver');
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

class methodsPage {
    driver: WebDriver;
    url: string = 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html';

    header: By = By.css('.titleText');
    addEmployee: By = By.name('addEmployee'); 
    newEmployee: By = By.xpath('//Li[text()="New Employee"]');
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

    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click();
    };

    async setInput(elementBy: By, keys: any) {
        await this.driver.wait(until.elementLocated(elementBy)).clear();
        return this.driver.findElement(elementBy).sendKeys(keys);
    };

    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).getText();
    };




    




};

const page = new methodsPage(driver);

describe("Employee Manager Test", () => {
    beforeEach(async () => {
        await page.navigate();
    });
    afterAll(async () => {
        await page.driver.quit();
    });
    test('adding an employee',async () => {
        await page.click(page.addEmployee);
        await page.click(page.newEmployee);
        await page.setInput(page.nameInput, "John Doe");
        await page.setInput(page.phoneInput, 1234567890);
        await page.setInput(page.titleInput, 'CEO');
        await page.click(page.saveBtn);
        let newName = await page.getText(page.nameInput);
        expect(newName).toContain("John Doe");
        
    });

});
