// https://docs.cypress.io/api/introduction/api.html

describe("Inventory Companion Test", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("h2", "Inventaris");
  });

  it("increase the Current location", () => {
    cy.get("button[data-test='increment']").click();
    cy.get("#current-location").contains("1");
  });

  it("select items on the inventory", () => {
    cy.get('input[type="checkbox"]').eq(0).check();
    cy.get('input[type="checkbox"]').eq(1).check();
    cy.get('input[type="checkbox"]').eq(2).check();
  });

  it("visits the About page", () => {
    cy.get("#about-page").click();
    cy.contains("h2", "About");
  });

  it("decrease the Current location", () => {
    cy.get("button[data-test='decrement']").click();
    cy.get("#current-location").contains("1");
  });

  it("visits the Inventory page", () => {
    cy.get("#home-page").click();
    cy.contains("h2", "Inventaris");
  });
});
