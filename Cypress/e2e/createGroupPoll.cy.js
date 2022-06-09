/// <reference types="cypress" />
import doodleHomePage from './pages/doodleHomePage'
import createGroupPoll from '../e2e/pages/createGroupPoll'

describe('Pom implementation', () =>{
    before(() =>{
        cy.visit('/');
    })   
    it('Create group poll form', ()=>{
        doodleHomePage.createBtn();
        cy.wait(1000)
        createGroupPoll.acceptCookies();  
         cy.get('.Input--dark').should('contain','Your name')     
        createGroupPoll.nameInput('Name and Surname');
        cy.get('.MeetingMetadata__organizer-email').should('contain','Your email')   
        function makeid(length){
            var result           = '';
            var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
         }
         console.log(makeid(5));
        createGroupPoll.emailInput(makeid(6) + "@getnada.com")
        cy.get('.MeetingMetadata__title').should('contain','Title')   
        createGroupPoll.titleInput('QA')
        cy.get('.MeetingMetadata__description').should('contain','Description (optional)')     
        createGroupPoll.descriptionInput('loreum ispum')
        cy.get('.MeetingMetadata__location').should('contain','Location (optional)')     
        createGroupPoll.locationInput('Prishtina')
        createGroupPoll.sublistId();
        cy.get('.rbc-timeslot-group').eq(1).click({force:true});
        cy.get('#MeetingTimesSection').should('contain','Add your times')     
        createGroupPoll.timeInput();
        createGroupPoll.createInviteButton();
    })
})