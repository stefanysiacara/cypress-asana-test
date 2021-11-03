import cypress from 'cypress';
import{login} from '../support/login.js'
import{profile} from '../support/profile.js'

describe('Profile panel', () => {
  it('Verify we can change the Nickname trhough "Edit profile button"', () => {
    var rug = require('random-username-generator');
    var nickname = rug.generate();
    cypress.visit('/');
    login.userLogin();
    profile.editProfileButton();
    profile.changeNicknameProfile(nickname);
    profile.saveChanges();
    cy.contains('span._13hnk7qk', nickname);
  });
  it('Verify we can change the Username trhough "Edit profile button"', () => {
    var rug = require('random-username-generator');
    var username = rug.generate();
    cypress.visit('/');
    login.userLogin();
    profile.editProfileButton();
    profile.changeUsernameProfile(username);
    profile.saveChanges();
    cy.url().should('include', username);
  });
  it('Verify we can change the Bio trhough "Edit profile button"', () => {
    var rug = require('random-username-generator');
    var bio = rug.generate();
    cypress.visit('/');
    login.userLogin();
    profile.editProfileButton();
    profile.editProfileBio(bio);
    profile.saveChanges();
  });
  it('Verify we can change the Username through "Pick username" link', () => {
    var rug = require('random-username-generator');
    var username = rug.generate();
    cypress.visit('/');
    login.userLogin();
    profile.editProfileUsername();
    profile.changeUsernameProfile(username);
    profile.saveChanges();
    cy.url().should('include', username);
  });
  it('Verify we can change the Bio through "Add your bio" link', () => {
    var rug = require('random-username-generator');
    var bio = rug.generate();
    cypress.visit('/');
    login.userLogin();
    profile.editProfileBio();
    profile.editProfileBio(bio);
    profile.saveChanges();
  });
});