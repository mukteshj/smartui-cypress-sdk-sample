/// <reference types="cypress" />

describe('example SmartUI test', () => {
  beforeEach(() => {

    cy.visit('https://ipinfo.io/')
  })

  it('test smartuiSnapshot', () => {
    cy.smartuiSnapshot('todo');
  })
})
