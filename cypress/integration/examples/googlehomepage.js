describe('automates webtable',function(){

    it('automating a child window', function(){

        cy.visit("https://www.google.com/")
        cy.get('.gLFyf').type("bestbuy")
        cy.get('.sbl1').each(($el,index,list)=>{

            if($el.text()==='bestbuy'){
                cy.get('.sbl1').eq(index).click()
            }

        })

        cy.get('sA5rQ').click()
        
    })

})