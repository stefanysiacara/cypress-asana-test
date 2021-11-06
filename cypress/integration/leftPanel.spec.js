import{login} from '../support/login.js'
import{leftPanel} from '../support/leftPanel.js'

describe('Left Panel', () => {
  beforeEach(() => {
    login.userLogin();
  });
  it('Verify we can access the courses dashboard through the Courses option.', () => {
    leftPanel.coursesOption();
    cy.get('div[data-test-id="classes-dashboard"]', {timeout:10000}).should('be.visible');
    cy.contains('div[data-test-id="classes-dashboard"]', "My courses");
  });
  it('Verify we can access the progress report of the courses through the Progress option..', () => {
    leftPanel.progressOption();
    cy.get('div[data-test-id="progress"]', {timeout:10000}).should('be.visible');
    cy.contains('div[data-test-id="progress"]', "My progress");
  });
  it('Verify we can access to "My profile" through the Profile option.', () => {
    leftPanel.profileOption();
    cy.get('div[data-test-id="my-profile"]', {timeout:10000}).should('be.visible');
    cy.contains('div[data-test-id="my-profile"]', "My profile");
  });
  it('Verify we can access teachers list of user through the Teachers option.', () => {
    leftPanel.teachersOption();
    cy.get('div[data-test-id="my-teachers"]', {timeout:10000}).should('be.visible');
    cy.contains('div[data-test-id="my-teachers"]', "My teachers and tutors");
  })
});