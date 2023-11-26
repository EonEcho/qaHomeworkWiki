import {Builder, By, Capabilities, WebDriver, WebElement, until} from 'selenium-webdriver';
const chromedriver = require('chromedriver');
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

import {EmployeePage} from './employeeManagerPageObject';
const ep = new EmployeePage(driver);

describe("Employee Manager Test", () => {
    beforeEach(async () => {
        await ep.navigate();

    });
    beforeAll(async () => {
        await ep.driver.quit();
    });
    test('Creating and editing an Employee',async () => {
        await ep.click(ep.addEmployee);
        await ep.click(ep.newEmployee);
        await ep.setInput(ep.nameInput, "Billy Madison");
        await ep.setInput(ep.phoneInput, 1234567890);
        await ep.setInput(ep.titleInput, "CEO");
        await ep.click(ep.saveBtn);
        let newName = await ep.getText(ep.nameInput);
        expect(newName).toContain("Billy Madison");
        
    });
});
