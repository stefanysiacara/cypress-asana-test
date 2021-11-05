const EDIT_COURSES_BUTTON = 'button[class=_12iepmsr]';
const CONTINUE_BUTTON = 'button[data-test-id="class-picker-modal-continue"]';
const PANEL_COURSE_LIST = 'div[class="_n4d7gpg"]';


export const coursesList = {
  editCoursesButton()
  {
    cy.get(EDIT_COURSES_BUTTON,{timeout:15000}).should("be.visible")
    cy.get(EDIT_COURSES_BUTTON).click();
  },
  addCourse(checkname){
    cy.get(PANEL_COURSE_LIST,{timeout:10000}).should('be.visible');
    cy.contains('label', checkname).children('div').children('input').check();
  },
  removeCourse(checkname){
    cy.get(PANEL_COURSE_LIST,{timeout:10000}).should('be.visible');
    cy.contains('label', checkname).children('div').children('input').uncheck();
  },
  continueButton()
  {
    cy.wait(4000);
    cy.contains(CONTINUE_BUTTON,'Continue').click();
  }
}