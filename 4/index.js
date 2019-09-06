const puppeteer = require('puppeteer');

(async function getData() {
    try{
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.evaluate('navigator.userAgent');

        await page.goto('https://www.work.ua/jobs-kyiv-it/?advs=1');
        await page.waitForSelector('.card-visited')
        console.log('hello world')

        const sections = await page.$$('.card-visited');

        for (const section of sections){
            const link = await section.$('a');
            link.click();

            await page.waitForSelector('#job-description');
            const ps = await page.$$('#job-description');
            console.log(ps)
            const named = await ps.$eval('p', p => p.innerText);
            console.log('name', named)
        }
    } catch (e) {
        console.log('eerr', e)
    }
})();