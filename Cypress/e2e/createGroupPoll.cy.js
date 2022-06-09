/// <reference types="cypress" />
import DoodleHomePage from './pages/DoodleHomePage'
import createGroupPoll from '../e2e/pages/createGroupPoll'


describe('Pom implementation', () => {
    beforeEach (() =>{
        cy.visit('/');
    })
    it('Navigate to create poll page', ()=> {
        cy.getCookies();
        DoodleHomePage.createBtn();
        createGroupPoll.acceptCookies();
        createGroupPoll.nameInput('Name snd Surname');
        createGroupPoll.emailInput('besarta@frakton.com')
        createGroupPoll.titleInput('QA')
        createGroupPoll.descriptionInput('loreum ispum')
        createGroupPoll.locationInput('Prishtina')
        createGroupPoll.sublistId();
    })
    
})