


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