import {Builder, By, until, Capabilities, WebDriver, WebElement} from 'selenium-webdriver';

const chromedriver = require('chromedriver')

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe('practicing xpath locators', () => {
    beforeEach(async () => {
        await driver.get('https://www.amazon.com/');
    });
    afterAll(async () => {
        await driver.quit();

    });
    const searchBar: By = By.xpath('//input[@id="twotabsearchtextbox"]');
    const results: By = By.xpath('//div[@class="s-main-slot s-result-list s-search-results sg-row"]');

    test("searching on amazon for a turkey brine kit", async() => {
        await driver.findElement(searchBar).sendKeys("turkey brine kit\n");
        let resultsText = await driver.findElement(results).getText();
        expect(resultsText).toContain('turkey brine');
    });
});

// to test you would do (npx jest addingXpath)