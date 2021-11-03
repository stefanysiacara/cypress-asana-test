const INPUT_LOGIN_OPTION = 'a#login-or-signup';
const INPUT_EMAIL = 'input#identifier-field';
const INPUT_PASSWORD = 'input#uid-labeled-text-field-0-wb-id-field';
const LOGIN_BUTTON = 'button[data-test-id =log-in-submit-button]';

export const login = {
  userLogin(){
    cy.get(INPUT_LOGIN_OPTION).click();
    cy.get(INPUT_EMAIL).type(Cypress.env('USER_EMAIL'));
    cy.get(INPUT_PASSWORD).type(Cypress.env('USER_PASSWORD'));
    cy.get(LOGIN_BUTTON).click();
  }
}