import {BasePage} from "../base/basePage";
import {ProductCard} from "./productCard.po";

export class ProductCards extends BasePage {

    private productCardContext = ".mattress-card:first()"

    waitForReadiness() {
        this.getElement(this.productCardContext);
    }

    getCard(): ProductCard {
        return new ProductCard(this.productCardContext);
    }

}