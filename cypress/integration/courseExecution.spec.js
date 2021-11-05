import { login } from "../support/login.js";
import { course } from "../support/course.js";

describe('', () => {
  beforeEach(() => {
    login.userLogin();
  });
  it('Verify we can access a course displayed in the dashboard', () => {
    const courseStart = 'Computer programming';
  
    course.startCourse(courseStart);
    cy.get('a[class="_io410w6"]',{timeout:15000}).should('be.visible');
    //cy.url().contains(courseStart);
    cy.contains('a[class="_io410w6"]', courseStart);
  });
});