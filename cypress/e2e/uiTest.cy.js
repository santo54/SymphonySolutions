import loginSwaglabs from "../support/login";
const loginID = require("./loginData.json");

describe("Testing Login", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("should log in successfully", () => {
    loginSwaglabs.typeUsername(loginID.username);
    loginSwaglabs.typePassword(loginID.password);
    loginSwaglabs.clickBttn();
    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_list").should("be.visible");
    cy.get(".active_option").should("have.text", "Name (A to Z)");
    cy.get("[data-test='product_sort_container']").select("Name (Z to A)");
    cy.get(".active_option").should("have.text", "Name (Z to A)");
    cy.get(".inventory_item_name").then((elements) => {
      const items = elements
        .map((index, element) => Cypress.$(element).text())
        .get()
        .reverse();
      const sortedItems = [...items].sort();
      expect(items).to.deep.equal(sortedItems);
    });
  });
});
