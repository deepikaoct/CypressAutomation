describe('automation in child window',function(){
    it('automates child window',function(){


        cy.visit("http://qaclickacademy.com/practice.php")
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','qaclickacademy')
        cy.go('back')

    })
})