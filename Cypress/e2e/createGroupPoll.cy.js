/// <reference types="cypress" />
import doodlePoll from '../e2e/pages/doodlePoll'

describe('Pom implementation', () => {
    beforeEach (() =>{
        cy.visit('/');
    })
    it('Navigate to create poll page', ()=> {
        doodlePoll.createBtn();
    })
})