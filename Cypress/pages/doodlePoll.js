class doodlePoll{

    elements = {
        createBtn: () => cy.get('.RydBc')
    }
    createBtn(){
        this.elements.createBtn().click();
    }

}
module.exports = new doodlePoll ();