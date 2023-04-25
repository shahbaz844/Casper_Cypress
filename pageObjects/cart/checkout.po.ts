import {ICheckout} from "./checkout.in";
import {BaseComponent} from "../base/baseComponent";
import {ProductDetail} from "../productDetail/productDetail";

export class Checkout extends BaseComponent implements ICheckout {

    detailPage = new ProductDetail();
    addToCart = this.detailPage.getAddToCart();

    private subTotal = ".grand-total";
    private checkoutButton = ".checkout-btn";

    getSubTotal() {
        this.getElement(this.subTotal).invoke("text").as("subTotalPrice");
    }

    getCheckoutButton() {
        this.getElement(this.checkoutButton).click();
    }

    isPriceMatch() {
        this.addToCart.getPrice();
        cy.get("@productDetailPrice").then((detailPrice)=>{
            this.getSubTotal();
            cy.get("@subTotalPrice").then((cartPrice)=>{
                expect(String(detailPrice).trim()).to.deep.eq(cartPrice);
            })
        })
    }

}
