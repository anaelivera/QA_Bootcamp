import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import ShoppingCart from '../pages/ShoppingCart'
import {CREDENTIALS} from '../data/Constants'

fixture('Navigate to the shopping cart')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t =>{
        await t
        .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
    })


test('Validate Sauce Labs Onesie has been added to the shopping cart', async t =>{
    await t
    .click(ProductsPage.AddOnesie)
    .click(ShoppingCart.cartButton)

    await t.expect(ShoppingCart.Onesie.exists).ok()
    

})

test('Validate several items have been added to the shopping cart', async t =>{
    await t
    .click(ProductsPage.itemBackpack)
    .click(ProductsPage.addButton)
    .click(ProductsPage.backButton)
    .click(ProductsPage.itemBike)
    .click(ProductsPage.addButton)
    .click(ShoppingCart.cartButton)

    await t.expect(ShoppingCart.cartQty.count).gte(1)
})