import {Selector} from 'testcafe'

class LoginPage {
    constructor() {
        this.usernameField = Selector('input[name="user-name"]')
        this.passwordField = Selector('input[name="password"]')
        this.loginButton = Selector('#login-button')
        this.errorMessage = Selector('h3[data-test="error"]')
    }
}

export default new LoginPage()