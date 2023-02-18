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
    this.monthlyPlanButton = "[data-price-period='1'] > span";
    this.twoYearsPlanButton = "[data-price-period='3'] > a";
    this.startFreeTrialButton = "#menu-item-32 > a";
    this.loginButton = "#menu-item-31 > a";
    this.getInTouchSection =
      ":nth-child(4) > .container > .row > :nth-child(1)";
    this.helpCenterSection =
      ":nth-child(4) > .container > .row > :nth-child(2)";
    this.onlineChatSection =
      ":nth-child(4) > .container > .row > :nth-child(3)";
    this.mobileMenuButton = ".btn-mobile-bar";
    this.mobileMenu = "#mobile-menu";
    this.mobileBody = ".content-wrapper";
  }

  visitPricingPage() {
    cy.visit("/pricing.html", { timeout: 10000 });
    cy.wait(2000);
  }

  // Header
  validatePricingPageTitle() {
    cy.title().should(
      "include",
      "Lodgify Pricing | Affordable Vacation Rental Software From $11"
    );
  }

  // Rental Numbers
  moveSlider() {
    cy.get(this.rentalNumberSlider)
      .trigger("mousedown")
      .trigger("mousemove", { which: 1, pageX: 955 })
      .trigger("mouseup");
  }
  validateRentalNumberValue() {
    cy.get(this.rentalNumberValue).should("have.attr", "value", "50");
  }

  //Yearly Plan
  chooseYearlyPlan() {
    cy.get(this.yearlyPlanButton).click();
  }
  validateYearlyPlanTitle() {
    cy.get(this.yearlyPlanTitle).contains("Yearly");
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

  // Monthly and Two years plan
  chooseMonthlyPlan() {
    cy.get(this.monthlyPlanButton).click();
  }
  validateMonthlyPlanPrice() {
    this.validateStarterPlanName();
    cy.get(this.starterPlanPrice).contains("$17");
    this.validateProfessionalPlanName();
    cy.get(this.professionalPlanPrice).contains("$46");
    this.validateUltimatePlanName();
    cy.get(this.ultimatePlanPrice).contains("$69");
  }
  chooseTwoYearsPlan() {
    cy.get(this.twoYearsPlanButton).click();
  }
  validateTwoYearsPlanPrice() {
    this.validateStarterPlanName();
    cy.get(this.starterPlanPrice).contains("$11");
    this.validateProfessionalPlanName();
    cy.get(this.professionalPlanPrice).contains("$30");
    this.validateUltimatePlanName();
    cy.get(this.ultimatePlanPrice).contains("$45");
  }

  //Start Free Trial Button
  validateStartFreeTrialBtn() {
    cy.get(this.startFreeTrialButton, { timeout: 2000 })
      .should("be.visible")
      .and("have.attr", "href", "https://www.lodgify.com/signup")
      .contains("Start Free Trial");
  }

  //Login
  validateLoginBtn() {
    cy.get(this.loginButton, { timeout: 2000 })
      .should("be.visible")
      .and("have.attr", "href", "https://www.lodgify.com/login")
      .contains("Login");
  }

  //Logo
  validateLogo() {
    cy.get(this.headLogo).should(
      "have.attr",
      "href",
      "https://www.lodgify.com/"
    );
    cy.get(this.logo, { timeout: 2000 })
      .should("be.visible")
      .contains("Lodgify Logo");
  }

  //We'here to Help section
  validateGetInTouchSection() {
    cy.get(this.getInTouchSection, { timeout: 2000 })
      .should("be.visible")
      .find("img")
      .and(
        "have.attr",
        "src",
        "./Lodgify Pricing _ Affordable Vacation Rental Software From $11_files/icon_account-management.svg"
      );
    cy.get(this.getInTouchSection).find("h4").contains("Get in touch");
    cy.get(this.getInTouchSection)
      .find("a")
      .should("have.attr", "href", "https://use.lodgify.com/contact");
  }
  validateHelpCenterSection() {
    cy.get(this.helpCenterSection, { timeout: 2000 })
      .should("be.visible")
      .find("img")
      .and(
        "have.attr",
        "src",
        "./Lodgify Pricing _ Affordable Vacation Rental Software From $11_files/icon_help-center.svg"
      );
    cy.get(this.helpCenterSection).find("h4").contains("Help center");
    cy.get(this.helpCenterSection)
      .find("a")
      .should("have.attr", "href", "https://help.lodgify.com/hc/en-us");
  }
  validateOnlineChatSection() {
    cy.get(this.onlineChatSection, { timeout: 2000 })
      .should("be.visible")
      .find("img")
      .and(
        "have.attr",
        "src",
        "./Lodgify Pricing _ Affordable Vacation Rental Software From $11_files/icon_support.svg"
      );
    cy.get(this.onlineChatSection).find("h4").contains("Online chat");
  }

  //Mobile Version
  validateMobileVersion() {
    cy.viewport(365, 667);
    cy.get(this.mobileMenuButton, { timeout: 4000 })
      .should("be.visible")
      .click();
    cy.wait(1000);
    cy.get(this.mobileMenu, { timeout: 4000 }).should("be.visible");
    cy.get(this.mobileMenuButton, { timeout: 4000 }).click();
    cy.get(this.onlineChatSection)
      .find("p")
      .contains(
        "Connect with our sales agents if you have any other questions."
      )
      .scrollIntoView();
    cy.wait(2000);
    cy.contains(
      "Vacation rental software pricing that scales as you grow"
    ).scrollIntoView();
    cy.wait(2000);
  }
}

export const pricingPage = new PricingPage();
