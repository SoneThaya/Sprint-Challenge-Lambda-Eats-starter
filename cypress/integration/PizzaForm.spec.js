import { v4 as uuid } from 'uuid'

const name = uuid().slice(0, 5)

describe('Ordering Pizza', () => {
  it('can navigate to the site', () => {
    cy.visit('')
    cy.url().should('include', 'localhost')
  })

  it('Can add text to the box', () => {
    cy.get("[name='name']")
      .type("Bill Gates")
    
    cy.get("input[name='cheese']")
      .check()
      .should('have.checked')
    
    cy.get("input[name='pepperoni']")
      .check()
      .should('have.checked')
    
    cy.get("input[name='pineapple']")
      .check()
      .should('have.checked')
    
    cy.get("input[name='bacon']")
      .check()
      .should('have.checked')
    
      cy.get("[name='special']")
      .type("Thirty minutes or less please, I'm hungry!")
      
  })

  it('Can Submit', () => {
    cy.contains('Submit')
      .click()
  })
})