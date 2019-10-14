//auto sugestions
/// <reference types="Cypress" /> 
import Homepage from '../PageObjects/Homepage'

describe('validating checkout cart sum',function(){

    before(function(){
//how to use fixtures to do data driven testing

        cy.fixture('example').then(function(datatest){
           this.datatest= datatest
        })

    })


    it('checkout sum cart',function(){

        const hp = new Homepage();
        var sum = 0 ;
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
        cy.get('tr td:nth-child(4) strong').each(($ele,index,list)=>{
            
           const pricet =  $ele.text()
           
           var pricetext = pricet.split(" ")
           var pricetext = pricetext[1].trim()
           cy.log(pricetext)
           sum=Number(sum)+Number(pricetext)
           
           }).then(function(){// promise handling is done here to make javascript understand sum should be 
            //printed after executing the array. cypress by default handles promises but javascript is also 
            // Asynchronous and it doesnt do promise handling by default so we have to execute the array and then
            //print the sum or javascript directly prints sum = 0 without handling the array , asynchronous nature 
            //makes the language to execute all the steps at a time
            cy.log(sum)
           })
           
           cy.get('tr td:nth-child(5) h3 strong').then(function(totaltext){
               const totalamount = totaltext.text()
               var amountfinal = totalamount.split(" ")
               var amountfinal = amountfinal[1]
               cy.log(amountfinal)

               expect(Number(amountfinal)).to.equals(sum) //Number method is used to convert string to integer
              
            })

          

           })
  
      
        })
        
        

    


