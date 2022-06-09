class DoodleHomePage{

    elements = {

        //insert here other elements of the homepage 
        //createBtn: () => cy.get('[data-testid="at-button"]')
        createBtn: () => cy.get('.RydBc')
    }
    createBtn(){
        this.elements.createBtn().click();
    }

}
module.exports = new DoodleHomePage();