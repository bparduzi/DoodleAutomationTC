/// <reference types="cypress" />
import doodleHomePage from './pages/doodleHomePage'
import createGroupPoll from '../e2e/pages/createGroupPoll'


describe('Pom implementation', () => {
    beforeEach (() =>{
        cy.visit('/');
        // cy.clearCookies('https://doodle.com');
        // cy.getCookies().should('be.empty')
    })
    it('Navigate to create poll page', ()=> {
        doodleHomePage.createBtn();
        createGroupPoll.acceptCookies();
        createGroupPoll.nameInput('Name and Surname');
        createGroupPoll.emailInput('besarta@frakton.com')
        createGroupPoll.titleInput('QA')
        createGroupPoll.descriptionInput('loreum ispum')
        createGroupPoll.locationInput('Prishtina')
        createGroupPoll.sublistId();
        createGroupPoll.timeInput();
        createGroupPoll.createInviteButton();
    })
    
})