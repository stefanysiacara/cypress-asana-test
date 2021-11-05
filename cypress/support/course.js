const COURSE_DASHBOARD = 'div[data-test-id="classes-dashboard"]';
const START_BUTTON = 'a[role="button"]';
const COURSE_SPACE = 'li[class="_1fml0e3"]';

export const course = {
  startCourse(courseName){
    cy.get(COURSE_DASHBOARD,{timeout:15000}).should('be.visible');
    cy.contains('h3', courseName).parents('li').children('div').children('ul').children('li').children('div').children(START_BUTTON).click({force:true});
  }
}