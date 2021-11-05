import{login} from '../support/login.js';
import{profile} from '../support/profile.js';
//import{index} from '../nickname-generator-nodejs/index.js';

//var rug = require('random-username-generator');

describe('Profile panel', () => {
  beforeEach(() => {
    login.userLogin();
  });
  it('Verify we can change the Nickname trhough "Edit profile button"', () => {
    
    //var rug = require('nickname-generator-nodejs');
    //var nickname = rug.generate();
    var nickname = 'Stef';
    
    profile.editProfileButton();
    profile.changeNicknameProfile(nickname);
    profile.saveChanges();
    cy.get('div#username-picker-container',{timeout:15000}).should('not.be.visible');
    cy.contains('div[aria-label="user menu"]', nickname);
  });
  it('Verify we can change the Username trhough "Edit profile button"', () => {
    //var rug = require('random-username-generator');
    //var username = rug.generate();
    var username = 'stefany';
    
    profile.editProfileButton();
    profile.changeUsernameProfile(username);
    profile.saveChanges();
    cy.url().should('include', username);
  });
  it('Verify we can change the Bio trhough "Edit profile button"', () => {
    //var rug = require('random-username-generator');
    //var bio = rug.generate();
    var bio = 'Hola soy stefany';
    
    profile.editProfileButton();
    profile.editProfileBio(bio);
    profile.saveChanges();
  });
  it('Verify we can change the Username through "Pick username" link', () => {
    //var rug = require('random-username-generator');
    //var username = rug.generate();
    var username = 'stefanyS';

    profile.editProfileUsername();
    profile.changeUsernameProfile(username);
    profile.saveChanges();
    cy.url().should('include', username);
  });
  it('Verify we can change the Bio through "Add your bio" link', () => {
    //var rug = require('random-username-generator');
    //var bio = rug.generate();
    var bio = 'Hola soy stefany 2';

    profile.editProfileBio();
    profile.editProfileBio(bio);
    profile.saveChanges();
  });
});