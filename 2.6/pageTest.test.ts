//package set up
import { googlePage } from "./pageObjectPractice";
//importing our google glass from the page object file
import {Builder, Capabilities, WebDriver} from 'selenium-webdriver';
const chromedriver = require('chromedriver');
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();
// pull over the class from the pageObject
const page = new googlePage(driver, "https://www.google.com/");

//test setup
test('do a search',async () => {
    await page.navigate();
    await page.search('Good Thanksgiving Sides');
    await page.getResults();
    await page.driver.quit();
    
});

