import {Selector} from 'testcafe'

class Overview{
    constructor(){
        this.overviewTitle = Selector('.title')
        this.finishButton = Selector('.btn_action.cart_button')
    }
}

export default new Overview()