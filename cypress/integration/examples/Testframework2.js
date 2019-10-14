//auto sugestions
/// <reference types="Cypress" /> 

import Homepage from '../PageObjects/Homepage'

describe('framework extension',function(){

    before(function(){
//how to use fixtures to do data driven testing

        cy.fixture('example').then(function(datatest){
           this.datatest= datatest
        })

    })

    it('new framework',function(){
     const hp =   new Homepage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        //the element shop has href attribute ,so u can use href in prop jquery method and open the link using cy.visit
        //as href has sub domain and not the main domain
        hp.getshopTab()

// fixtures : example json has two products in array in product name :
// so we have array of values in productname
//cy.fixture('example').then(function(datatest)){}) gives all the value in datatest. 
//declare it globally using this.datatest=datatest and then use this.datatest.productname which has array of products
//in order to iterate an array of data in fixtures to parametrize your tests , use forEach function in javascript
//iterate the array one by one and give the data as parameters to the function present in commands.js

        this.datatest.productname.forEach(function(ele){
            cy.selectProduct(ele) 
        })

        cy.get('.nav-link.btn.btn-primary').click()
        cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
        cy.get('#country').type("india")
        
        cy.get('div[class="suggestions"] ul li a').click()
        cy.get('.checkbox.checkbox-primary label').click()
        cy.get('input[value="Purchase"]').click()
        cy.get('.alert.alert-success.alert-dismissible').then(function(successalert){
           const successmessage = successalert.text()
           expect(successmessage).to.include('Success! Thank you! Your order will be delivered in next few weeks :-)')
        })

        })

    })
    