describe('automation',function(){
    it('more automation',function(){
        cy.visit("http://test1.absofttrainings.com/")
        cy.get('#top-menu > #menu-item-17 > a').click()
       cy.get("h3:contains('Test Product1')").then(function(producttext){
           this.protext =  producttext.text()

        })
        cy.get('.products li:nth-child(1)').click()
        cy.get('#addtocart').click()
        cy.get('.woocommerce-message').then(function(messagetext){
           const ecommercetext =  messagetext.text();
           cy.log(ecommercetext)
           expect(ecommercetext).to.include(this.protext)

        })

        cy.get('a:contains("View Cart")').click()
        cy.get('ul[id="top-menu"] li').each(($ele,index,list)=>{
            if($ele.text().includes('How to Use')){
                cy.get('ul[id="top-menu"] li').eq(index).click()            }

        })
        

cy.get('li:contains("off10% – to apply 10% discount")').then(function(coupon){
  var cotext = coupon.text().split(" ")
  
  var couptext =cotext[0]
  cy.log(couptext)
  
  
cy.get('ul[id="top-menu"] li').each(($ele,index,list)=>{
    if($ele.text().includes('Cart')){
        cy.get('ul[id="top-menu"] li').eq(index).click()            }

})

cy.log(couptext)

cy.get('#coupon_code').type(couptext)

})

    })
})