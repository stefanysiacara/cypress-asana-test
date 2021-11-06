import { login } from "../support/login.js";
import { coursesList } from "../support/coursesList.js";

const COURSE_LIST = '[data-test-id="modal-backdrop"]';
const COURSE_DASHBOARD = 'div[data-test-id="classes-dashboard"]';

describe('Course Management', () => {
  beforeEach(() => {
    login.userLogin();
  });
  it('Verify we can add a new course to our course list', () => {
    const course = "Arithmetic";
    
    coursesList.editCoursesButton();
    coursesList.addCourse(course);
    coursesList.continueButton();
    cy.get(COURSE_LIST,{timeout:10000}).should('not.be.visible');
    cy.get(COURSE_DASHBOARD).contains('h3',course);
  });
  it('Verify we can remove a course to our course list', () => {
    const course = "Arithmetic";
    
    coursesList.editCoursesButton();
    coursesList.removeCourse(course);
    coursesList.continueButton();
    cy.get(COURSE_LIST,{timeout:10000}).should('not.be.visible');
    cy.get(COURSE_DASHBOARD).contains('h3',course).should('not.contain');
  })
});