describe('testing dropdown',function(){

    it('test dropdown',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //handling dynamic dropdowns
        cy.get('#autocomplete').type("ind")
        
cy.get('.ui-menu-item div').each(($el,index,list)=>{
    if($el.text()==="India"){
        $el.click();

    }
})

cy.get('#autocomplete').should('have.value','India')

//handling visible and invisible elements(hide and show)


cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')

// Radio button
cy.get("[value='radio2']").check().should('be.checked')
cy.get("[value='radio1']").should('not.be.checked')


    })

})