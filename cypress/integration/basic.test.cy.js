/// <reference types="Cypress" />
import { pricingPage, PricingPage } from "../pages/PricingPage";

// Test Requirement 1:
describe("Lodgify Pricing Page - Yearly Plan Price (Step 1)", () => {
  before(() => {
    pricingPage.visit();
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
    pricingPage.visit();
  });
  it("Verify currency selector is visible", () => {
    pricingPage.validateCurrencyLabel();
    pricingPage.validateCurrencySelector();
  });
  it("Verify currency change to Euros", () => {
    pricingPage.currencyToEuros(); // Can't change to Euros unless another currency is selected first and then Euros is reselected.It means Euros should have been the default currency from the beginning. This is a Bug
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
// Logo, Login, Start Free Trial, Monthly, Two years, mobile viewport
// Test Requirement 3:

describe.only("Lodgify Pricing Page - Extra coverage (Step 3)", () => {
  before(() => {
    pricingPage.visit();
  });
  it("Verify Header elements", () => {
    pricingPage.validateLogo();
  });
});
