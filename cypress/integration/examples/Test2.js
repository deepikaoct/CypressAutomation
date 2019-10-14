/// <reference types="Cypress" /> 
describe('validating some more ui controls' ,function(){

    it('validations on qa click academy',function(){


        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type("ca");
        cy.wait(500)
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const vegtext= $el.find('h4.product-name').text()
            if(vegtext.includes('Cashews')){
                cy.get('.products').find('.product').eq(index).contains("ADD TO CART").click()
    
               // $el.find('button').click()
            }
            
            })
            cy.get('.cart-icon > img').click()
            cy.contains("PROCEED TO CHECKOUT").click()


    })

})