
class createGroupPoll{

    elements={
        nameInput: () => cy.get('[data-testid="organizer-name-input-field"]').should('exist'),
        emailInput: () => cy.get('[data-testid="organizer-email-input-field"]').should('exist'),
        titleInput: () => cy.get('[data-testid="title-input-field"]').should('exist'),
        descriptionInput: () => cy.get('.MeetingMetadata__description__textarea'),
        locationInput: () => cy.get('[data-testid="location-input-field"]').should('exist'),
        sublistId: () => cy.get('#text').should('exist').click(),
        timeInput: () => cy.get('.rbc-timeslot-group').should('exist').eq(1).click(),
        acceptCookies: () => cy.get('#onetrust-accept-btn-handler').should('have.text','Accept All').click(),
        createInviteButton: () => cy.get('[data-testid="organization-submit-button"]').should('have.text','Create invite and continue').click()
    }
   
    nameInput(nameInput){
        this.elements.nameInput().type(nameInput);
    }
    emailInput(emailInput)
    {
        this.elements.emailInput().type(emailInput)
    }
    titleInput(titleInput)
    {
        this.elements.titleInput().type(titleInput)
    }
    descriptionInput(descriptionInput)
    {
        this.elements.descriptionInput().type(descriptionInput)
    }
    locationInput(locationInput)
    {
        this.elements.locationInput().type(locationInput)
    }sublistId()
    {
        this.elements.sublistId();
    }
    timeInput()
    {
        this.elements.timeInput()
    }
    acceptCookies(){
        this.elements.acceptCookies();
    }
    createInviteButton(){
        this.elements.createInviteButton();
    }

}
module.exports =new createGroupPoll();