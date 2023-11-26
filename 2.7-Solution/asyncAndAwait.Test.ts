import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver';
const chromedriver = require('chromedriver');
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

test('async and await vs promise chaining',async () => {
    await driver.get('https://www.google.com/');
    await driver.wait(until.elementLocated(By.name('q')));
    await driver.findElement(By.name('q')).sendKeys('puppies\n');
    await driver.wait(until.elementLocated(By.id('rcnt')));
    let results = await driver.findElement(By.id('rcnt')).getText();
    expect(results).toContain('puppies');
    await driver.quit();
    
});