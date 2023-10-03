export class Loginpage{


    navigation (url :string){
        cy.visit(url)
        
    }
    enterusername (username :string){
        cy.get('#mobile_number').type(username)
    }
    enterpass (userpass :string){
        cy.get('#password').type(userpass).type('{enter}')
        
    }
    clickLogin(){
        cy.get('#login').click()
    
    }








}