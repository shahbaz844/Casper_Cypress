import {BasePage} from "../base/basePage";
import {Header} from "./header.po";

export class HomeDashboard extends BasePage {

    private headerSearchContext = ".inner-container"

    waitForReadiness() {
        this.getElement(this.headerSearchContext)
    }

    getHeader():Header{
        return new Header(this.headerSearchContext)
    }

}