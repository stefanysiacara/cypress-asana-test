export const profile = {
  editProfileButton(){
    cy.get('button[class=_pot4j9l]').click();
  },
  editProfileUsername(){
    cy.contains('span.empty-field', 'Pick a username').click();
  },
  editProfileBio(){
    cy.contains('span.empty-field', 'Add your bio').click();
  },
  changeNicknameProfile(nickName){
    cy.get('#nickname').should('be.visible');
    cy.get('#nickname').type(nickName);
  },
  changeUsernameProfile(username){
    cy.get('#username').should('be.visible');
    cy.get('#username').type(username);
  },
  changeBioProfile(bio){
    cy.get('#bio-picker').should('be.visible');
    cy.get('#bio-picker').type(bio);
  },
  saveChanges(){
    cy.get('button[class=_dxjxyv7]').click();
  }
}