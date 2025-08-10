// https://docs.cypress.io/api/introduction/api.html

describe('Inventory Companion Test', () => {
  before(() => {
    cy.clearAllLocalStorage();
  });

  after(() => {
    cy.clearAllLocalStorage();
  });

  it('visits the app root url', () => {
    cy.visit('/');
    cy.contains('h2', 'Inventory');
  });

  it('increase the Current location', () => {
    cy.visit('/');
    cy.get("button[data-cy='increment-button']").click();
    cy.get("[data-cy='current-location-value']").contains('2');
  });

  it('select items on the inventory', () => {
    cy.visit('/');
    cy.get("input[data-cy='inventory-checkbox']").eq(0).check();
    cy.get("input[data-cy='inventory-checkbox']").eq(1).check();
    cy.get("input[data-cy='inventory-checkbox']").eq(2).check();
  });

  it('visits the About page', () => {
    cy.visit('/');
    cy.get("[data-cy='burger-menu']").click();
    cy.get("[data-cy='about-page-link']").click();
    cy.contains('h2', 'About');
  });

  it('decrease the Current location', () => {
    cy.visit('/');
    cy.get("button[data-cy='decrement-button']").click();
    cy.get("[data-cy='current-location-value']").contains('1');
  });

  it('visits the Inventory page', () => {
    cy.visit('/about');
    cy.contains('h2', 'About');
    cy.get("[data-cy='burger-menu']").click();
    cy.get("[data-cy='home-page-link']").click();
    cy.contains('h2', 'Inventory');
  });
});
