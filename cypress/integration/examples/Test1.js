
//auto sugestions
/// <reference types="Cypress" /> 
describe('webautomation using cypress', function() {
    it(' cypress introduction', function() {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type("ca");
        cy.wait(500)
        cy.get("div[class='product-image']").should('have.length',4)

        //parent child chaining using find ( find for elements inside the parent block only )

        cy.get('.products').find('.product').should('have.length',4)

        cy.get('.products').find('.product').eq(2).contains("ADD TO CART").click()

        cy.get('.products').find('.product').each(($el, index, $list) => {
        const vegtext= $el.find('h4.product-name').text()
        if(vegtext.includes('Cashews')){
            cy.get('.products').find('.product').eq(index).contains("ADD TO CART").click()

           // $el.find('button').click()
        }
        
        })
//grabbing the text from elements using text() jquery 
cy.get("[href='#/offers']").then(function(topdeals){

    cy.log(topdeals.text())
})

// writing a customized css using nth child concept
    cy.get("div[class='cart'] a:nth-child(2)").then(function(locatortext){
        cy.log(locatortext.text())

    })
      
    })
})