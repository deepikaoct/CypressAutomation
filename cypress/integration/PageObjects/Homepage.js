class Homepage
{
    getEditBox(){

        return  cy.get('input[name="name"]:nth-child(2)')

    }
    

    getCheckBox(){
        return cy.get('.form-check-input')
    }

    getTwowaydatabinding(){
       return cy.get(':nth-child(4) > .ng-pristine')

    }

    getenterpreneurRadiobutton(){
        return cy.get('#inlineRadio3')
    }

    getGender(){
        return cy.get('select')

    }

    getshopTab(){
        cy.get('.navbar-nav li:nth-child(2) a').then(function(attributeval){
            const urlshop =  attributeval.prop('href')
            return cy.visit(urlshop)
         })

    }

}
export default Homepage