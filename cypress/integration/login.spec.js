import {auxiliar} from "../support/auxiliar.js";
import {login} from "../support/login.js";

describe('Login page', () => {
  it('Verify we can login with a valid account', () => {
    login.userLogin();
    cy.get('div[class=basic-user-info]').should('be.visible');
    cy.contains('span[class="_wozql4 _13hnk7qk"]', auxiliar.isEmail(Cypress.env('USER_EMAIL')));
  });
});