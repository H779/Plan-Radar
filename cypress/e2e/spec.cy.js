describe("template spec", () => {
  it("Visits Plan Radar", () => {
    cy.visit("/");
    cy.get(".cf3E9g")
      .should("exist")
      .then(($element) => {
        if ($element) {
          cy.get(":nth-child(1) > .cf2Lf6").click();
        }
      });
    cy.get(".main-nav-btns > .login-btn").click();
    cy.intercept("https://www.planradar.com/api/get_registration_url?").as(
      "getRegistration"
    );
    cy.wait("@getRegistration");
    cy.get("#email").type("hadeersalemfcis@gmail.com");
    cy.get(".btn-block").click();
    cy.get("#password").type("Hadeer1511salem");
    cy.get(".btn-block").click();
  });
});
