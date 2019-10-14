//auto sugestions
/// <reference types="Cypress" /> 
describe('handling pop up or alert',function(){

    it('automates pop up or alert', function(){

        //cypress always auto accept a pop up or alert
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        //let the cypress know if you are handling an alert to grab the text else  cypress auto accept it when u click on an alert
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.get('#confirmbtn').click()
        //let the cypress know if you are handling a confirm button to grab the text. else cypress auto accept the confirmation
        cy.on('window:confirm',(str2)=>{
            expect(str2).to.equal('Hello , Are you sure you want to confirm?')

            

        })





    })

})