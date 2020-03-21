const puppeteer = require('puppeteer');

test('Adds two number', () => {
    const sum = 1 + 2;
    expect(sum).toEqual(3);
})

test('We should be able to launch a browser', async() => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    page.goto('localhost:5000')
})