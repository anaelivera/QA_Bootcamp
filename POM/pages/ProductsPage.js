import {Selector} from 'testcafe'

class ProductsPage {
    constructor(){
        this.pageTitle = Selector('.title')
        this.itemBackpack = Selector('.inventory_item_img')
        this.AddOnesie = Selector('#add-to-cart-sauce-labs-onesie')
        this.addButton = Selector('.btn_primary.btn_inventory')
        this.itemBike = Selector('img[alt="Sauce Labs Bike Light"]')
        this.backButton = Selector('.inventory_details_back_button')
        this.filterDropdown = Selector('select[data-test="product_sort_container"]')
        this.lowToHighPrice = Selector('option[value="lohi"]')
        this.firstPrice = Selector('.inventory_item_price').nth(0)
        this.lastPrice = Selector('.inventory_item_price').nth(5)
    }
}

export default new ProductsPage()