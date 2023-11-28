import { Google } from "./googleWBP";
const google = new Google();
const fs = require(`fs`)
test('Find and provide Favorite Candy', async () => {
    await google.navigate();
    await google.search('Jolly Ranchers');
    let text = await google.getResults();
    expect(text).toContain('Jolly Ranchers');
    await fs.writeFile(`${__dirname}/google.png`,
    await google.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('A picture is Worth more than words')
    });
    fs.writeFile(`${__dirname}/googleResults.txt`, text, (e) => {
        if (e) console.error(e)
        else console.log('Save Succesful')
    });
    await google.driver.quit();
});