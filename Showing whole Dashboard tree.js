context('Querying', () => {
    beforeEach(() => {
        cy.visit('https://docs.cypress.io');
    })

    it('dashboard links', () => {   
        cy.get('[data-target=sidebar-li-dashboard] .sidebar-links').first().should('not.be.visible');
        cy.get('[data-target=sidebar-li-dashboard]').first().click();
        cy.get('[data-target=sidebar-li-dashboard] .sidebar-links').first().should('be.visible');

    })

})