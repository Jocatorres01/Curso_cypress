/// <reference types="cypress" />

describe('localizadores', () => {
    

    it('tipos_localizadores', () => {
        cy.visit("https://www.google.com/")
        
        //Localizar por tagname
        cy.get('textarea')

        //Localizar por id
        cy.get('#APjFqb')

        //Localizar por clase (class value)
        cy.get('.gLFyf')

        //Localizar por Attribute
        cy.get('[maxLength]')

        //Localizar por Attribute y su valor
        cy.get('[maxLength="2048"]')

        //Combinar localizadores
        cy.get('[maxLength="2048"].gLFyf')

    })
})