describe("API test using Cypress", () => {
  it("API Status", () => {
    cy.request("GET", "https://api.publicapis.org/entries").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.headers["content-type"]).to.include("application/json");
      expect(response.body).to.not.be.empty;
    });
  });
  it("Read the response, find all objects with property with Category: Authentication and Authorization", () => {
    cy.api("GET", "https://api.publicapis.org/entries").then((response) => {
      const category = "Authentication & Authorization";
      const filteredObjects = response.body.entries.filter(
        (entry) => entry.Category === category
      );

      cy.log(
        `Total objects with Category "${category}": ${filteredObjects.length}`
      );
      cy.log("Found objects:");
      cy.log(filteredObjects);
    });
  });
});
