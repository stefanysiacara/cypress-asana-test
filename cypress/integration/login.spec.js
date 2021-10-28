//import {isEmail} from "./cypress/support/auxiliar.js"
describe('Login page', () => {
  it('Verify we can login with a valid account', () => {
    cy.visit('/');
    cy.get('a#login-or-signup').click();
    cy.get('input#identifier-field').type(Cypress.env('USER_EMAIL'));
    cy.get('input#uid-labeled-text-field-0-wb-id-field').type(Cypress.env('USER_PASSWORD'));
    cy.get('button[data-test-id =log-in-submit-button]').click();
    cy.contains('span._13hnk7qk', Cypress.env('USER_NAME'));
  });
});