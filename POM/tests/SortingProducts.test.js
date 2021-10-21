import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import {CREDENTIALS} from '../data/Constants'

fixture('Sorting feature')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t =>{
        await t
        .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
    })

    test ('As a user, I should be able to sort products by price', async t =>{
        await t
        .click(ProductsPage.filterDropdown)
        .click(ProductsPage.lowToHighPrice)
       

        await t.expect(ProductsPage.firstPrice.innerText).eql('$7.99')
        await t.expect(ProductsPage.lastPrice.innerText).eql('$49.99')
        
    })