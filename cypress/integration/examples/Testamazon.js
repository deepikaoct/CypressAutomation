//auto sugestions
/// <reference types="Cypress" /> 

//cy.pause() will help to pause your execution of automated tests in between and you can also use .debug() to debug your testcases
describe('testing amazon',function(){

    it('amazon site validation', function(){

        cy.visit("https://www.amazon.com/")
        cy.get('#nav-tools a:nth-child(1)').click({force:true})
        cy.get('[type="radio"]').each(($ele,ind,list)=>{

           if($ele.text().includes('English')){
               cy.get('[type="radio"]').eq(index).check()
           }

        })

        cy.get('[type="radio"]').eq(0).should('be.checked') 
        cy.go('back') 
        cy.get('.navFooterLinkCol.navAccessibility ul li:nth-child(2)').each(($ele,index,list)=>{

            cy.log($ele.text())

            if($ele.text().includes('Sell')){
cy.get('.navFooterLinkCol.navAccessibility ul li:nth-child(2)').eq(index).click()

            }
        
        })
    })
})