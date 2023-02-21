/// <reference types="cypress" />
import { pricingPage, PricingPage } from "../pages/PricingPage";
import { contactPage, ContactPage } from "../pages/ContactPage";

// Pricing Page - Test Requirement 1:
describe("Lodgify Pricing Page - Yearly Plan Price (Step 1)", () => {
  before(() => {
    pricingPage.visitPricingPage();
  });
  it("Verify having the right title", () => {
    pricingPage.validatePricingPageTitle();
  });
  it("Verify Yearly plan with 50 rentals displays", () => {
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
    pricingPage.validateDefaultPlansPriceEuros(); // Euros is the currency by default but in this case prices are in Dollars
    pricingPage.currencyToEuros(); // Can't change to Euros unless another currency is selected first and then Euros is reselected.It means Euros should have been the default currency from the beginning. This is a Bug
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
  it("Verify logo", () => {
    pricingPage.validateLogo();
  });
  it("Verify 'We're Here To Help' Section", () => {
    pricingPage.validateGetInTouchSection();
    pricingPage.validateHelpCenterSection();
    pricingPage.validateOnlineChatSection();
  });
  it("Verify mobile version", () => {
    pricingPage.validateMobileVersion();
  });
});

// Contact Page - Test Requirement 4:
describe("Lodgify Contact Page - Form inputs (Step 4)", () => {
  before(() => {
    contactPage.visitContactPage();
  });
  it("Verify having the right title", () => {
    contactPage.validateContactPageTitle();
  });
  it("Verify form inputs", () => {
    contactPage.validateEmptyFormFields();
    contactPage.sendBtn();
  });
  it("Verify mandatory message for Name", () => {
    contactPage.validateNameError();
  });
  it("Verify mandatory message for Phone Number", () => {
    contactPage.validatePhoneError(); // Phone field is not mandatory so it doesn't display a message, this is bug
  });
  it("Verify mandatory message for Email", () => {
    contactPage.validateEmailError(); // Email field doesn't match completetly the mandatory field required "Email Address"
  });
  it("Verify mandatory message for Comment", () => {
    contactPage.validateCommentError();
  });
});

describe("Lodgify Contact Page - Filling and deleting form (Step 4)", () => {
  let user;
  before(() => {
    contactPage.visitContactPage();
  });
  beforeEach(() => {
    cy.fixture("data").then((users) => {
      user = users[0];
    });
  });
  it("Verify adding the name", () => {
    contactPage.typeName(user.name);
  });
  it("Verify adding the phone country and number", () => {
    contactPage.selectCountryPhone(user.countryCode);
    contactPage.typePhone(user.number);
  });
  it("Verify adding the email", () => {
    contactPage.typeEmail(user.email);
  });
  it("Verify adding the guests", () => {
    contactPage.typeGuest(user.guests);
  });
  it("Verify adding the date", () => {
    contactPage.pickArrivalDate(user.arrivalDate);
    contactPage.pickDepartureDate(user.departureDate);
  });
  it("Verify adding the comment", () => {
    contactPage.typeComment(user.comment);
  });
  it("Verify sending the form", () => {
    contactPage.sendBtn();
  });
  it("Verify clearing the form", () => {
    contactPage.clearForm(); // Clearing the form, after having submitted the "Send Button" displays an error message "Dates are not valid" even if the input is empty
    contactPage.validateEmptyFormFields();
  });
});

// Test Requirement 5:
describe("Lodgify Contact Page - Extra coverage (Step 5)", () => {
  before(() => {
    contactPage.visitContactPage();
  });
  it("Verify Book Now button", () => {
    contactPage.validateBookNowBtn();
  });
  it("Verify header menu", () => {
    contactPage.validateLogo();
    contactPage.validateMenu();
  });
  it("Verify Contact Us information", () => {
    contactPage.validateContactUs();
  });
  it("Verify About Host information", () => {
    contactPage.validateAboutHost();
  });
  it("Verify footer", () => {
    contactPage.validateFooter();
  });
  it("Verify mobile version", () => {
    contactPage.mobileVersion();
  });
});
