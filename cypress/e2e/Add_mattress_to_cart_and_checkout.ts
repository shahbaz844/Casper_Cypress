import {HomeDashboard} from "../../pageObjects/home/homeDashboard";
import {ProductCards} from "../../pageObjects/productDetail/productCards";
import {ProductDetail} from "../../pageObjects/productDetail/productDetail";
import {Cart} from "../../pageObjects/cart/cartPage";

let homeDashboard: HomeDashboard;
let productCard: ProductCards;
let productDetail: ProductDetail;
let cart: Cart;

describe('Add Mattress to cart and checkout', function () {

    cart = new Cart()
    homeDashboard = new HomeDashboard()
    productCard = new ProductCards()
    productDetail = new ProductDetail()

    const header = homeDashboard.getHeader()
    const card = productCard.getCard()
    const addToCart = productDetail.getAddToCart()
    const checkout = cart.getCheckoutDetail()

    it('Add mattress to cart and checkout', function () {

        cy.visit(Cypress.env("BASE_URL"))
        cy.log("User navigated to url successfully")
        header.getMattresses()
        cy.log("User taps on Mattress tab in header")
        productCard.waitForReadiness()
        card.getExploreButton()
        cy.log("User taps on explore button in product card")
        addToCart.isNameMatch()
        cy.log("Verified that Name of product in card and on detail page is same")
        addToCart.getAddToCart()
        cy.log("User taps on add to cart button on product detail page.")
        checkout.isPriceMatch()
        cy.log("Verified that Price of product on product detail page and product in cart is same")
        checkout.getCheckoutButton()
        cy.log("User taps on checkout button")
        header.getCart()
        cy.log("User taps on cart icon in header")
    });
});