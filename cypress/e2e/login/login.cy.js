/// <reference types="cypress" />


describe('login page', () => {
  it('should get todo page', ()=> {
    cy.wait(2000)
    cy.visit("http://localhost:3000/")
    cy.wait(2000)
    cy.get('.text-xl').contains("Welcome Back")
    cy.wait(1000)
    cy.get('.text-sm').contains("Enter your credentials to access your account")
    cy.wait(1000)
    cy.get(':nth-child(1) > label').contains("E-mail Address")
    cy.wait(1000)
    cy.get(':nth-child(2) > label').contains("Password")
    cy.wait(1000)
    cy.get(':nth-child(1) > .outline-none').type("example")
    cy.wait(1000)
    cy.get(':nth-child(2) > .outline-none').type("pass")
    cy.wait(2000)
    cy.get('.italic').contains("email must be a valid email")
    cy.wait(2000)
    cy.get('.justify-center > p').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > .italic').contains("password must be at least 6 characters")
  })
})
