/// <reference types="cypress" />
import doodlePoll from '../../pages/doodlePoll'

describe('Pom implementation', () => {
    beforeEach (() =>{
        cy.visit('/');
    })
    it('Navigate to create poll page', ()=> {
        doodlePoll.createBtn();
    })
})