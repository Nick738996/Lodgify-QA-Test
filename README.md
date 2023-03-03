Lodgify QA Test by Brandon Gomez

In this project, I will be using Cypress to automate Lodgify web application with two different pages. I will be testing the application on two environments, you can switch between "QA" or "Development" environment. This will help us catch any bugs or issues before they make it to production, and ensure that the application is working as expected.

# Test Structure:

I include all tests in only file "basic.test.cy.js" located in cypress/integration, it contains 6 test suites to cover all the steps required. In total I design a number of 36 test cases, 4 of them failed since they did not meet the requirements.

## Lodgify Pricing Page - Yearly Plan Price (Step 1)

Verifies that the pricing page contains the expected elements and that the layout is correct. Also, it validates users can select a plan with a different number of rentals and its price is displayed according to the plan.

## Lodgify Pricing Page - Currency change (Step 2)

Tests that the pricing options are displayed correctly in different currencies.

## Lodgify Pricing Page - Extra coverage (Step 3)

Tests extra functionalities provided in the Pricing Page based in my own criteria such as mobile version, header elements, or Start Free Trial button.

## Lodgify Contact Page - Form inputs (Step 4)

Tests that the contact page contains the expected elements and that the form is correctly displayed with the right inputs and mandatory messages.

## Lodgify Contact Page - Filling and deleting form (Step 4)

Tests that the contact form can be filled, submitted, and deleted correctly.

## Lodgify Contact Page - Extra coverage (Step 5)

Tests extra functionalities provided in the contact page based in my own criteria such as mobile version, header, footer elements, or Book Now button.

# Data and Pages for testing

Important data used across different test suites is stored in a file named "data.json" located in the cypress/fixtures folder.

I created a folder called "Pages" located in cypress/pages with 2 files representing each page required to test, Pricing and Contact Page, with the main goal of representing and using all the locators and functions related to that particular page.

# Environments

To run the tests, I used Cypress's built-in support for different environments. In the cypress.json file, we have defined two different environments: Dev and QA.

# Execute Test

Run tests in QA:

```
npm run cy:run:qa
```

Run tests in Dev:

```
npm run cy:run:dev
```

You can add additional environments by creating a new cypress.json file: Ex: cypress.prod.json

You can modify existing ones by changing cypress.json or cypress.dev.json. Check package.json for more information about scripts.

# Bugs

I add a folder named "bugs report" located in Lodgify-QA-Test/bug-report. In this folder, there is a .xlsx file where I reported all of the bugs found during the test execution.
