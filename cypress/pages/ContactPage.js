export class ContactPage {
  constructor() {
    // Selectors
    this.contactLabel = ".fluid > :nth-child(1) > .ui";
    this.form = "[data-testid=form]";
    this.nameInput =
      "[data-testid=form] > :nth-child(1) > :nth-child(1) > .ui > input";
    this.nameErrorMsg = ":nth-child(1) > :nth-child(1) > .input > .ui";
    this.phoneField = ".PhoneInput";
    this.phoneNumberInput = "[data-testid=phone-input]";
    this.phoneCountryInput = ".PhoneInputCountrySelect";
    this.emailInput = ".eight > .ui > input";
    this.emailErrorMsg = ".eight > .input > .ui";
    this.guestInput = ".four > .ui > input";
    this.datePickerIcon = ".DateRangePickerInput_calendarIcon > .icon > svg";
    this.datePickerField = ".DateRangePickerInput";
    this.datePickerRightArrow =
      ".DayPickerNavigation_rightButton__horizontalDefault > .DayPickerNavigation_svg__horizontal";
    this.dateClearButton = ".DateRangePickerInput_clearDates_svg > path";
    this.calendar = ".CalendarMonthGrid";
    this.arrivalDatePickerInput = "#c245db8b-711a-4e6d-a1aa-0fedfcc589a2";
    this.departureDatePickerInput = "#75e1dd12-75fb-4f91-9a17-a4ed50ddda5a";
    this.datePickerErrorMsg = ":nth-child(3) > .input > .ui";
    this.commentInput = ".input > textarea";
    this.commentErrorMsg = ":nth-child(4) > .input > .ui";
    this.termsAndConditions = ".light";
    this.sendFormButton = "[data-testid=form] > [data-testid=button]";
    this.bookNowButton = "[data-testid=button]";
    this.logo = "[data-testid=logo]";
    this.menuHome = "[href='/']";
    this.MenuRates = "[href='/en/rates']";
    this.menuAvailability = "[href='/en/availability']";
    this.menuContact = "[href='/en/contact']";
    this.contactUs = ".ui.header";
    this.contactUsInfo = ".ui.medium.relaxed.list";
    this.aboutHostHeader = "#sect0605f5e > .grid > :nth-child(1)";
    this.aboutHostInfo = ".top > .flex-container > .header";
    this.aboutHostAvatar = "[data-testid=responsive-image-img]";
    this.aboutHostFooter = ".html-container";
    this.footer = ".bottom-navigation";
    this.footerLodgify = "[data-testid=footer-powered]";
    this.mobileBurgerMenu = "[data-testid=navigation-icon]";
    this.mobileCloseBurgerMenu = "[data-testid=navigation-icon]";

    // Variables for long texts and extra elements
    this.waitingTime = 1000;
    this.timeElements = { timeout: 2000 };
    this.timePageLoad = { timeout: 10000 };
    this.termsAndConditionsTxt1 =
      "This site is protected by reCAPTCHA and the Google";
    this.termsAndConditionsTxt2 = "privacy policy";
    this.termsAndConditionsTxt3 = "Terms of Service";
    this.termsAndConditionsHref1 =
      "a[href='https://policies.google.com/privacy']";
    this.termsAndConditionsHref2 =
      "a[href='https://policies.google.com/terms']";
    this.contactUsEmail = "Email: nicolas@lodgify.com";
    this.contactUsPhone = "Phone: +34555278878278878";
    this.aboutHostAvatarSrc =
      "https://i.icdbcdn.com/oh/e6503867-d935-4ccc-b71d-f42bff7a994a.gif?w=300";
    this.aboutHostFirstName = "FirstName 278878";
    this.aboutHostLastName = "LastName 278878";
    this.aboutHostFooterText = "Test bio 278878";
    this.backgroundColorFooter = "rgb(68, 68, 68)";
    this.footerText = "©2023 Logo All rights reserved- Powered by";
    this.footerLodgifyHref = "https://www.lodgify.com";
  }

  // Visit Contact page
  visitContactPage() {
    cy.visit(Cypress.env("contactPage"), this.timePageLoad);
    cy.wait(this.waitingTime);
  }

  // Header
  validateContactPageTitle() {
    cy.title().should("include", "Contact");
  }

  // Form Fields
  validateFormInputs() {
    cy.get(this.form).should("be.visible");
  }
  validateEmptyNameInput() {
    cy.get(this.nameInput)
      .should("be.visible")
      .and("have.value", "")
      .and("have.attr", "placeholder", "Name");
  }
  validateEmptyPhoneInput() {
    cy.get(this.phoneField).should("be.visible");
    cy.get(this.phoneNumberInput)
      .should("have.value", "")
      .and("have.attr", "placeholder", "Phone");
  }
  validateEmptyEmailInput() {
    cy.get(this.emailInput)
      .should("be.visible")
      .and("have.value", "")
      .and("have.attr", "placeholder", "Email");
  }
  validateEmptyGuestInput() {
    cy.get(this.guestInput)
      .should("be.visible")
      .and("have.value", "")
      .and("have.attr", "placeholder", "Guests");
  }
  OpenCalendar() {
    cy.get(this.arrivalDatePickerInput).click().should("be.visible");
  }
  closeCalendar() {
    cy.get(this.phoneNumberInput)
      .click()
      .should("not.have.class", this.calendar);
  }
  validateEmptyDateInput() {
    cy.get(this.datePickerIcon).should("be.visible");
    cy.get(this.datePickerField).should("be.visible");
    cy.get(this.arrivalDatePickerInput)
      .should("be.visible")
      .and("not.have.text");
    cy.get(this.departureDatePickerInput)
      .should("be.visible")
      .and("not.have.text");
    this.OpenCalendar();
    this.closeCalendar();
  }
  validateEmptyCommentInput() {
    cy.get(this.commentInput)
      .should("be.visible")
      .and("have.value", "")
      .and("have.attr", "placeholder", "Comment");
  }
  validateTermsAndConditions() {
    cy.get(this.termsAndConditions)
      .should("be.visible")
      .and("contain", this.termsAndConditionsTxt1)
      .and("contain", this.termsAndConditionsTxt2)
      .and("contain", this.termsAndConditionsTxt3);
    cy.get(this.termsAndConditionsHref1);
    cy.get(this.termsAndConditionsHref2);
  }
  sendBtn() {
    cy.get(this.sendFormButton)
      .should("be.visible")
      .and("contain", "Send")
      .click(this.timeElements);
    cy.wait(this.waitingTime);
  }
  validateEmptyFormFields() {
    this.validateFormInputs();
    this.validateEmptyNameInput();
    this.validateEmptyPhoneInput();
    this.validateEmptyEmailInput();
    this.validateEmptyGuestInput();
    this.validateEmptyDateInput();
    this.validateEmptyCommentInput();
    this.validateTermsAndConditions();
  }

  // Mandatory fields and errors
  validateNameError() {
    cy.get(this.nameErrorMsg)
      .should("be.visible")
      .and("contain", "Name is mandatory", this.timeElements);
  }
  validatePhoneError() {
    cy.get(this.phoneField).contains(
      "Phone number is mandatory",
      this.timeElements
    );
  }
  validateEmailError() {
    cy.get(this.emailErrorMsg)
      .should("be.visible")
      .and("contain", "Email address is mandatory", this.timeElements);
  }
  validateCommentError() {
    cy.get(this.commentErrorMsg)
      .should("be.visible")
      .and("contain", "Comment is mandatory", this.timeElements);
  }
  validateDisabledSendBtn() {
    cy.get(this.sendFormButton).should("be.disabled", this.timeElements);
  }

  // Fill and validate Form
  typeName(newName) {
    cy.get(this.nameInput).type(newName).should("have.value", newName);
  }
  selectCountryPhone(code) {
    cy.get(this.phoneCountryInput).select(code).should("have.value", code);
  }
  typePhone(newPhoneNumber) {
    cy.get(this.phoneNumberInput)
      .type(newPhoneNumber)
      .should("have.value", newPhoneNumber);
  }
  typeEmail(newEmail) {
    cy.get(this.emailInput).type(newEmail).should("have.value", newEmail);
  }
  typeGuest(newGuest) {
    cy.get(this.guestInput).type(newGuest).should("have.value", newGuest);
  }
  pickArrivalDate(arrival) {
    cy.get(this.arrivalDatePickerInput)
      .type(arrival)
      .should("have.value", arrival);
    cy.wait(this.waitingTime);
  }
  pickDepartureDate(departure) {
    cy.get(this.departureDatePickerInput)
      .type(departure)
      .should("have.value", departure);
    this.OpenCalendar();
    cy.get(this.datePickerRightArrow).click();
    cy.wait(this.waitingTime);
    cy.get(this.emailInput).click().should("not.have.class", this.calendar);
  }
  typeComment(comment) {
    cy.get(this.commentInput).type(comment).should("have.value", comment);
  }
  clearForm() {
    cy.get(this.nameInput).clear();
    cy.get(this.phoneNumberInput).clear();
    cy.get(this.emailInput).clear();
    cy.get(this.guestInput).clear();
    cy.get(this.arrivalDatePickerInput).then((input) => {
      if (input.val()) {
        cy.get(this.dateClearButton).click();
      }
    });
    cy.get(this.commentInput).clear();
  }
  // Extra Coverage
  validateBookNowBtn() {
    cy.get(this.bookNowButton).should("contain", "Book Now").and("be.enabled");
  }
  validateLogo() {
    cy.get(this.logo).should("contain", "Logo").and("have.attr", "href", "/en");
  }
  validateMenu() {
    cy.get(this.menuHome)
      .should("contain", "Home")
      .trigger("mouseover")
      .and("be.visible");
    cy.get(this.MenuRates)
      .should("contain", "Rates")
      .trigger("mouseover")
      .and("be.visible");
    cy.get(this.menuAvailability)
      .should("contain", "Availability")
      .trigger("mouseover")
      .and("be.visible");
    cy.get(this.menuContact)
      .should("contain", "Contact")
      .trigger("mouseover")
      .and("be.visible");
  }
  validateContactUs() {
    cy.get(this.contactUs).should("contain", "Contact us");
    cy.get(this.contactUsInfo)
      .should("contain", this.contactUsEmail)
      .and("contain", this.contactUsPhone);
  }
  validateAboutHost() {
    cy.get(this.aboutHostHeader).should("contain", "About host");
    cy.get(this.aboutHostAvatar)
      .should("be.visible")
      .and("have.attr", "src", this.aboutHostAvatarSrc);
    cy.get(this.aboutHostInfo)
      .should("contain", this.aboutHostFirstName)
      .and("contain", this.aboutHostLastName);
    cy.get(this.aboutHostFooter).should("contain", this.aboutHostFooterText);
  }
  validateFooter() {
    cy.get(this.footer)
      .should("have.css", "background-color", this.backgroundColorFooter)
      .and("contain", this.footerText);
    cy.get(this.footerLodgify)
      .find("a")
      .should("have.attr", "href", this.footerLodgifyHref);
  }
  // Mobile Version
  mobileVersion() {
    const waitTime = cy.wait(this.waitingTime);
    cy.viewport(365, 667);
    cy.get(this.mobileBurgerMenu, this.timeElements)
      .should("be.visible")
      .click();
    waitTime;
    this.validateBookNowBtn();
    cy.get(this.mobileCloseBurgerMenu, this.timeElements).click();
    cy.get(this.footerLodgify).scrollIntoView();
    waitTime;
    cy.get(this.logo).scrollIntoView();
    waitTime;
  }
}

export const contactPage = new ContactPage();
