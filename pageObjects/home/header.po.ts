import {IHeader} from "./header.in";
import {BaseComponent} from "../base/baseComponent";

export class Header extends BaseComponent implements IHeader {

    private mattressTab = ".dropdown:visible():first()";
    private cartIcon = ".minicart:visible()";

    getCart() {
        this.clickOnElement(this.cartIcon);
    }

    getMattresses() {
        this.clickOnElement(this.mattressTab);
    }

}