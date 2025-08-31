describe('Navigation Tests', () => {
  it("Navigates to the event page", () => {
    cy.visit('https://heart-4gtt.vercel.app/');
    cy.contains('Event').click();
    cy.url({ timeout: 10000 }).should('include', '/event'); 
  });
})