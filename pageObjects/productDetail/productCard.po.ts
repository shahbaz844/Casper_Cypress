import {BaseComponent} from "../base/baseComponent";
import {IProductCard} from "./productCard.in";

export class ProductCard extends BaseComponent implements IProductCard {

    private productName = ".product-name:first()";
    private productPrice = ".sales";
    private exploreButton = ".primary-button";

    getCardProductName() {
        this.getElement(this.productName).invoke("text").as("cardName");
    }

    getCardProductPrice() {
        this.getElement(this.productPrice).invoke("text").as("cardPrice");
    }

    getExploreButton() {
        this.getElement(this.exploreButton).first().click({force: true});
    }


}