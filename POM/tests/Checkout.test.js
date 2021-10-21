import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import ShoppingCart from '../pages/ShoppingCart'
import Checkout from '../pages/Checkout'
import Overview from '../pages/Overview'
import FinishPage from '../pages/FinishPage'
import {CREDENTIALS} from '../data/Constants'

fixture('Checkout feature testing')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t =>{
        await t
        .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
        .click(ProductsPage.itemBackpack)
        .click(ProductsPage.addButton)
        .click(ShoppingCart.cartButton)
        .click(Checkout.checkoutButton)
        
    })


test.only ('Validate the user navigates to the confirmation page.', async t =>{
    await t
    .typeText(Checkout.nameField, 'nombre')
    .typeText(Checkout.lastnameField, 'apellido')
    .typeText(Checkout.zipField, '97000')
    .click(Checkout.continueButton)

    await t.expect(Overview.overviewTitle.innerText).eql('CHECKOUT: OVERVIEW')

    .click(Overview.finishButton)

    await t.expect(FinishPage.thankyouMessage.innerText).eql('THANK YOU FOR YOUR ORDER')

})
