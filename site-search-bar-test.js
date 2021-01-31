context('Querying', () => {
    beforeEach(() => {
        cy.visit('https://docs.cypress.io');
    })


    // it('search bar test', () => {   
    //     cy.get('#search-input').type('pantheon');
    //     cy.get('.algolia-docsearch-suggestion--title').contains('Adam Gross');
    // })

    it('dashboard links', () => {   
        cy.get('[data-target=sidebar-li-dashboard] .sidebar-links').first().should('not.be.visible');

        cy.get('[data-target=sidebar-li-dashboard]').first().click();

        cy.get('[data-target=sidebar-li-dashboard] .sidebar-links').first().should('be.visible');

    })

    

})