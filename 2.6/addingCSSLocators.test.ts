//! first import from selenium
import { Builder, By, until, WebDriver,WebElement } from "selenium-webdriver";
//! set chrome driver so we can use it in our builder class
const chromedriver = require('chromedriver');
//! make a new instance of the chrome builder to create our chrome browser
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
//* you will do whats above everytime for set up

describe('practicing css locators', () => {
    beforeEach(async () => {
        await driver.get("https://www.amazon.com/");
        //*Copy and paste the Links
    });
    afterAll(async () => {
        await driver.quit();

    });


    const searchBar: By = By.id('twotabsearchbox');
    const results: By = By.css('.s-main-slot');

    test("searching for a turkey brine kit", async () => {
    await driver.findElement(searchBar).sendKeys("turkey brine kit\n");
    let resultsText = await driver.findElement(results).getText();
    expect(resultsText).toContain('turkey brine')
    });

});

// to test you would do (npx jest addingCSS)