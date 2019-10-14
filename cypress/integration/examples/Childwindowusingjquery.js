
//auto sugestions
/// <reference types="Cypress" /> 

describe('handling childwindow using jquery',function(){

    it('handling child window',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractise/")
        cy.get('#opentab').then(function(ele){
            const url = ele.prop('href')
            cy.log(url)
            cy.visit(url)// visit cant be used to visit another main domain, cypress thinks it as a security issue
        })

    })

})