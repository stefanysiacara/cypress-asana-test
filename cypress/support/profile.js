export const profile = {
  editProfileButton(){
    cy.get('button[class=_pot4j9l]',{timeout:10000}).should('be.visible');
    cy.get('button[class=_pot4j9l]').click({force:true});
  },
  editProfileUsername(){
    cy.contains('span.empty-field', 'Pick a username').click();
  },
  editProfileBio(){
    cy.contains('span.empty-field', 'Add your bio').click();
  },
  changeNicknameProfile(nickName){
    cy.get('input[class=nickname]',{timeout:20000}).should('be.visible');
    cy.get('input[class=nickname]').clear().type(nickName,{force:true});
  },
  changeUsernameProfile(username){
    cy.get('#username',{timeout:15000}).should('be.visible');
    cy.get('#username').type(username);
  },
  changeBioProfile(bio){
    cy.get('#bio-picker',{timeout:15000}).should('be.visible');
    cy.get('#bio-picker').type(bio);
  },
  saveChanges(){
    cy.get('button[class=_dxjxyv7]').click();
  }
}