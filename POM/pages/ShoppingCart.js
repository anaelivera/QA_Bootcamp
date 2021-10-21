import {Selector} from 'testcafe'

class ShoppingCart {
    constructor() {
        this.cartButton = Selector('.shopping_cart_link')
        this.cartTitle = Selector('.subheader')
        this.cartQty = Selector('.cart_quantity')
        this.Backpack = Selector('#item_4_title_link')
        this.Onesie = Selector('.inventory_item_name').withExactText('Sauce Labs Onesie')
        
    }
}

export default new ShoppingCart()