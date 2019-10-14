
//auto sugestions
/// <reference types="Cypress" /> 
describe('validating check box',function(){
    it('validates check box', function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //check boxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get("input[type='checkbox']").check(['option1','option2'])

        //select tag - static dropdowns
        cy.get('select').select('Option1').should('have.value','option1')
        cy.get('select').select('Option2').should('have.value','option2')

        //pass value attribute or the value of the dropdown to be selected


    })
})