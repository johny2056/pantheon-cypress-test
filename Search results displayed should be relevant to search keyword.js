context('Querying', () => {
    beforeEach(() => {
        cy.visit('https://docs.cypress.io');
    })


     it('search bar test', () => {   
         cy.get('#search-input').type('pantheon');
         cy.get('.algolia-docsearch-suggestion--title').contains('Adam Gross');
         cy.get('.algolia-docsearch-suggestion--text').contains('…a variety of technology companies, including Pantheon, Docker');
     })
    

})