const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'http://www.tesla.com/',

    elements: {
        ShopAvailable: '//*[@id="tesla-hero-parallax-3245"]/div[2]/div/div[1]/section/a[1]',
        InventoryHeader: '//*[@id="iso-container"]/div/div[1]/section/h1',
        InventoryLink: '//*[@id="mega-menu"]/div/dialog/div[1]/div[1]/div[3]/ul/li[1]/a',
        ViewDetails: '//*[@id="iso-container"]/div/div[1]/main/div/article[4]/section[5]/div[1]/button'
    },
    
    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        const selector = this.elements[objectKey]; // LoginHeader // /html/body/mdb-root/main/div/app-login/header/section/div/div/div/div/div/div/div[1]/h2/strong

        await driver.sleep(500);
        return driver.findElement(By.xpath(selector)); // true // false
    },

};