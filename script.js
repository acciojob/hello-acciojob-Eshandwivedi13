//your code here
it('should have correct styles', () => {
  cy.visit('your_page_url'); // Replace with your actual page URL
  cy.get('main.accio#job', { timeout: 10000 })
    .should('exist')
    .should('be.visible')
    .should('have.css', 'width', '150px')
    .should('have.css', 'height', '150px')
    .should('have.css', 'background-color', 'rgb(0, 0, 0)');
});
