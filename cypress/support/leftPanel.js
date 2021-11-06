const COURSES = 'a[data-test-id="side-nav-courses"]';
const PROGRESS = 'a[data-test-id="side-nav-progress"]';
const PROFILE = 'a[data-test-id="side-nav-profile"]';
const TEACHERS = 'a[data-test-id="side-nav-teachers"]';
//const CONTENT = 'nav[data-test-id="side-nav"]';

export const leftPanel = {
  coursesOption(){
    cy.get(COURSES, {timeout:15000}).should('be.visible');
    cy.get(COURSES).children().click();
    /*cy.wait(20000);
    cy.get(CONTENT, {timeout:15000}).should('be.visible');
    cy.get(CONTENT).children('section').eq(0).children('ul').children('li').children('a').click();*/
  },
  progressOption(){
    cy.get(PROGRESS, {timeout:15000}).should('be.visible');
    cy.get(PROGRESS).children().click();
    /*cy.wait(20000);
    cy.get(CONTENT, {timeout:20000}).should('be.visible');
    cy.get(CONTENT).children('section').eq(1).children('ul').children('li').eq(0).children('a').click();*/
  },
  profileOption(){
    cy.get(PROFILE, {timeout:15000}).should('be.visible');
    cy.get(PROFILE).children().click();
    /*cy.wait(20000);
    cy.get(CONTENT, {timeout:20000}).should('be.visible');
    cy.get(CONTENT).children('section').eq(1).children('ul').children('li').eq(1).children('a').click();*/
  },
  teachersOption(){
    cy.get(TEACHERS, {timeout:15000}).should('be.visible');
    cy.get(TEACHERS).children().click();
    /*cy.wait(20000);
    cy.get(CONTENT, {timeout:20000}).should('be.visible');
    cy.get(CONTENT).children('section').eq(1).children('ul').children('li').eq(2).children('a').click();*/
  }
}