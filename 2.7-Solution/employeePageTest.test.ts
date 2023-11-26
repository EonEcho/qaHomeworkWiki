import {Builder, By, Capabilities, WebDriver, until, WebElement} from 'selenium-webdriver';
const chromedriver = require('chromedriver');
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

//import our class from the object file

import { methodsPage } from './employeePageObject';
const mp = new methodsPage(driver);

//test set up

describe("practicing page objects", () => {
    beforeEach(async () => {
        await mp.driver.navigate();
        
    });

    afterAll(async () => {
        await mp.driver.quit();
        
    });

    test('adding an employee using an outside pom',async () => {
        await mp.click(mp.addEmployee);
        await mp.click(mp.newEmployee);
        await mp.setInput(mp.nameInput, 'Cal kestis');
        await mp.setInput(mp.phoneInput, 1234567890);
        await mp.setInput(mp.titleInput, 'CEO');
        
    })
})