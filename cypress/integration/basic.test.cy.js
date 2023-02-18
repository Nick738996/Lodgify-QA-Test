/// <reference types="Cypress" />
import { pricingPage, PricingPage } from "../pages/PricingPage";

// Test Requirement 1:
describe("Lodgify Pricing Page - Yearly Plan Price (Step 1)", () => {
  before(() => {
    pricingPage.visitPricingPage();
  });
  it("Should have the right title", () => {
    pricingPage.validatePricingPageTitle();
  });

  it("Select Yearly plan with 50 rentals displays", () => {
    pricingPage.chooseYearlyPlan();
    pricingPage.validateYearlyPlanTitle();
    pricingPage.moveSlider();
    pricingPage.validateRentalNumberValue();
  });

  it("Verify Starter plan price", () => {
    pricingPage.validateStarterPlanName();
    pricingPage.validateStarterPlanPriceDollars();
  });

  it("Verify Professional plan price", () => {
    pricingPage.validateProfessionalPlanName();
    pricingPage.validateProfessionalPlanPriceDollars();
  });

  it("Verify Ultimate plan price", () => {
    pricingPage.validateUltimatePlanName();
    pricingPage.validateUltimatePlanPriceDollars(); // Real price for Ultimate plan is $518, this is a bug
  });
});

// Test Requirement 2:
describe("Lodgify Pricing Page - Currency change (Step 2)", () => {
  before(() => {
    pricingPage.visitPricingPage();
  });
  it("Verify currency selector is visible", () => {
    pricingPage.validateCurrencyLabel();
    pricingPage.validateCurrencySelector();
  });
  it("Verify currency change to Euros", () => {
    pricingPage.validateDefaultPlansPriceEuros();
    pricingPage.currencyToEuros(); // Can't change to Euros unless another currency is selected first and then Euros is reselected.It means Euros should have been the default currency from the beginning. This is a Bug
    pricingPage.validateDefaultPlansPriceEuros();
    pricingPage.currencyToDollars();
    pricingPage.currencyToEuros();
    pricingPage.validateDefaultPlansPriceEuros();
  });
  it("Verify currency change to Dollars", () => {
    pricingPage.currencyToDollars();
    pricingPage.validateDefaultPlansPriceDollars();
  });
  it("Verify currency change to Pounds", () => {
    pricingPage.currencyToPounds();
    pricingPage.validateDefaultPlansPricePounds();
  });
});

// Test Requirement 3:
describe("Lodgify Pricing Page - Extra coverage (Step 3)", () => {
  before(() => {
    pricingPage.visitPricingPage();
  });
  it("Verify Monthly plan", () => {
    pricingPage.chooseMonthlyPlan();
    pricingPage.validateMonthlyPlanPrice();
  });
  it("Verify Yearly plan", () => {
    pricingPage.chooseTwoYearsPlan();
    pricingPage.validateTwoYearsPlanPrice();
  });
  it("Verify Start Free Trial button", () => {
    pricingPage.validateStartFreeTrialBtn();
  });
  it("Verify Login button", () => {
    pricingPage.validateLoginBtn();
  });
  it("Verify Logo", () => {
    pricingPage.validateLogo();
  });
  it("Verify 'We're Here To Help' Section", () => {
    pricingPage.validateGetInTouchSection();
    pricingPage.validateHelpCenterSection();
    pricingPage.validateOnlineChatSection();
  });
  it("Verify Mobile version", () => {
    pricingPage.validateMobileVersion();
  });
});
// Test Requirement 4:
describe("Lodgify Contact Page - (Step 4)", () => {
  before(() => {
    pricingPage.visitContactPage();
  });
});
