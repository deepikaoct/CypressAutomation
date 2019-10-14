//auto sugestions
/// <reference types="Cypress" /> 
import Homepage from '../PageObjects/Homepage'

describe('new automation framework',function(){

    before(function(){
//how to use fixtures to do data driven testing

        cy.fixture('example').then(function(datatest){
           this.datatest= datatest
        })

    })


    it('automates end to end',function(){

        const homepage = new Homepage();
        
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        homepage.getEditBox().type(this.datatest.name)
        homepage.getGender().select(this.datatest.gender)
        homepage.getCheckBox().check({force:true})
        homepage.getTwowaydatabinding().should('have.value',this.datatest.name)
        // the text box throws error when u enter less than 2 characters validate property called minlength in tag

        homepage.getEditBox().should('have.attr','minlength','2')//  validate any attribute in a tag
        //using jquery should('have.attr' ,attr, value) method
       homepage.getenterpreneurRadiobutton().should('be.disabled')// checks if the enterpreneur radio button is disabled or not


    })


    after(function(){

        cy.log("test passed")


    })
})