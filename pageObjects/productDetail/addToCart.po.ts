import {IAddToCart} from "./addToCart.in";
import {ProductCard} from "./productCard.po";

export class AddToCart extends ProductCard implements IAddToCart {

    private productDetailName = "h1.product-name";
    private productDetailPrice = ".upsell-bundle-item-price-value";
    private addToCart = ".add-to-cart";

    getProductName() {
        this.getElement(this.productDetailName).invoke("text").as("productDetailName");
    }

    getPrice() {
        this.getElement(this.productDetailPrice).invoke("text").as("productDetailPrice");
    }

    getAddToCart() {
        this.getElement(this.addToCart).first().click({force:true});
    }

    isNameMatch() {
        this.getCardProductName();
        cy.get("@cardName").then((cardName)=>{
            this.getProductName();
            cy.get("@productDetailName").then((addToCartName)=>{
                expect(cardName).to.deep.eq(addToCartName);
            })
        })
    }

}