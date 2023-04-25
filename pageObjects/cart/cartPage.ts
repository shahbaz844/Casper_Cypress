import {BasePage} from "../base/basePage";
import {Checkout} from "./checkout.po";

export class Cart extends BasePage {

    private checkoutContext = ".totals"

    waitForReadiness() {
        this.getElement(this.checkoutContext);
    }

    getCheckoutDetail(): Checkout {
        return new Checkout(this.checkoutContext);
    }

}