export class PricingPage {
  constructor() {
    this.yearlyPlanButton = ".nav-magic-line";
    this.yearlyPlanTitle = ".col-md-4";
    this.rentalNumberTitle = ".property-scroll-box-title";
    this.rentalNumberSlider = ".min-slider-handle";
    this.rentalNumberValue = "#scroll-prop-plan";
    this.starterPlanTitle =
      ".price-card-starter > .price-item > :nth-child(1) > .plan-name";
    this.starterPlanPrice =
      ".price-card-starter > .price-item > :nth-child(1) > .plan-price";
    this.professionalPlanTitle =
      ":nth-child(2) > .price-item > :nth-child(1) > .plan-name";
    this.professionalPlanPrice =
      ":nth-child(2) > .price-item > :nth-child(1) > .plan-price";
    this.ultimatePlanTitle =
      ":nth-child(3) > .price-item > :nth-child(1) > .plan-name";
    this.ultimatePlanPrice =
      ":nth-child(3) > .price-item > :nth-child(1) > .plan-price";
    this.currencyLabel = ".col-auto";
    this.currencySelector = ".price-currency-select";
    this.logo = ".svg";
    this.headLogo = ".head-logo";
  }
  visit() {
    cy.visit("/pricing.html");
  }
  validatePricingPageTitle() {
    cy.title().should(
      "include",
      "Lodgify Pricing | Affordable Vacation Rental Software From $11"
    );
  }

  //Yearly Plan
  chooseYearlyPlan() {
    cy.get(this.yearlyPlanButton).click();
  }
  validateYearlyPlanTitle() {
    cy.get(this.yearlyPlanTitle).contains("Yearly");
  }
  moveSlider() {
    cy.get(this.rentalNumberSlider)
      .trigger("mousedown")
      .trigger("mousemove", { which: 1, pageX: 955 })
      .trigger("mouseup");
  }
  validateRentalNumberValue() {
    cy.get(this.rentalNumberValue).should("have.attr", "value", "50");
  }

  //Starter Plan
  validateStarterPlanName() {
    cy.get(this.starterPlanTitle).contains("Starter");
  }
  validateStarterPlanPriceDollars() {
    cy.get(this.starterPlanPrice).contains("$64");
  }

  //Professional Plan
  validateProfessionalPlanName() {
    cy.get(this.professionalPlanTitle).contains("Professional");
  }
  validateProfessionalPlanPriceDollars() {
    cy.get(this.professionalPlanPrice).contains("$375");
  }

  //Ultimate Plan
  validateUltimatePlanName() {
    cy.get(this.ultimatePlanTitle).contains("Ultimate");
  }
  validateUltimatePlanPriceDollars() {
    cy.get(this.ultimatePlanPrice).contains("$525");
  }

  //Currency Change
  validateCurrencyLabel() {
    cy.get(this.currencyLabel).contains("Do you want to see other currencies?");
  }
  validateCurrencySelector() {
    cy.get(this.currencySelector).should("be.visible");
  }

  //Euros €
  currencyToEuros() {
    cy.get(this.currencySelector).select("eur").contains("€ EUR");
  }
  validateDefaultPlansPriceEuros() {
    cy.get(this.starterPlanPrice).contains("11€");
    cy.get(this.professionalPlanPrice).contains("28€");
    cy.get(this.ultimatePlanPrice).contains("43€");
  }

  //Dollars $
  currencyToDollars() {
    cy.get(this.currencySelector).select("usd").contains("$ USD");
  }
  validateDefaultPlansPriceDollars() {
    cy.get(this.starterPlanPrice).contains("$12");
    cy.get(this.professionalPlanPrice).contains("$32");
    cy.get(this.ultimatePlanPrice).contains("$48");
  }

  //Pounds £
  currencyToPounds() {
    cy.get(this.currencySelector).select("gbp").contains("£ GBP");
  }
  validateDefaultPlansPricePounds() {
    cy.get(this.starterPlanPrice).contains("£10");
    cy.get(this.professionalPlanPrice).contains("£24");
    cy.get(this.ultimatePlanPrice).contains("£39");
  }

  //Logo
  validateLogo() {
    cy.get(this.headLogo).should(
      "have.attr",
      "href",
      "https://www.lodgify.com/"
    );
    cy.get(this.logo).should("be.visible").contains("Lodgify Logo");
  }

  //Login
}

export const pricingPage = new PricingPage();
