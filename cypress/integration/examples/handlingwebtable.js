
//auto sugestions
/// <reference types="Cypress" /> 
describe('automating tables in a webpage',function(){
    it('webpages have table to be automated',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("tr:nth-child(4) td").each(($e1, index, $list) => {
            const text=$e1.text()

            if(text.includes("Appium")){
              cy.log($e1.text())
              cy.get("tr:nth-child(4) td").eq(index).next().then(function(price){
                  const pricetext = price.text()
                  expect(pricetext).to.equal('30')
              })
                
                
            }

        })
//mousehover
        cy.get('#mousehover').trigger('mouseover')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
        cy.get('.mouse-hover-content a').each(($ele,ind,list)=>{
           const element1 =  $ele.text()
           if(element1.includes('Reload')){
               cy.get('.mouse-hover-content a').eq(ind).click({force:true})

           }

        })

        //Another way of handling mousehover using show method in jquery
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
cy.url().should('include','shetty')
cy.get('.gf-li').should('have.length',20)



    })
})


