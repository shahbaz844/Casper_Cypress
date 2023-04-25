import {BasePage} from "../base/basePage";
import {AddToCart} from "./addToCart.po";

export class ProductDetail extends BasePage {

    private productDetailContext = ".product-details";

    waitForReadiness() {
        this.getElement(this.productDetailContext);
    }

    getAddToCart(): AddToCart {
        return new AddToCart(this.productDetailContext);
    }

}