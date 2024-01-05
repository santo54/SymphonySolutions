class loginSwaglabs {
  elements = {
    usernameInput: () => cy.get("[data-test='username']"),
    passwordInput: () => cy.get("#password"),
    buttonInput: () => cy.get("#login-button"),
  };

  typeUsername(user) {
    this.elements.usernameInput().type(user);
  }

  typePassword(pass) {
    this.elements.passwordInput().type(pass);
  }
  clickBttn() {
    this.elements.buttonInput().click();
  }
}

module.exports = new loginSwaglabs();
