export class Loginpage{
    navigate(){
        cy.visit('http://172.105.36.107:4101/login')   
    }

    enterusername(){
        cy.get('#mobile_number').type('9960736369{enter}')  
    }
    enterpassword(){
        cy.get('#password').type('11223344')

    }
    clickLogin(){
    cy.get('#login').click()

    
    }




}