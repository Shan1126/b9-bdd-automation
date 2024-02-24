module.exports = function () {

    this.Given('I am on the Tesla website', function () {
        return helpers.loadPage(page.tesla.url);
    })
   
    this.Then('I should see ShopAvailable button', function() {
        return page.tesla.elementExists('ShopAvailable')
    })
   
    this.Then('I should see Inventory header', function() {
        return page.tesla.elementExists('InventoryHeader')
    });

    


}