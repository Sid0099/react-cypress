
it ('login page with correct value',function(){

    cy.visit('http://boilerplate-react.accucia.com')
    cy.get('#mobile_number').type('9960736369')
    cy.get('.MuiButton-label').click()
    cy.get('#login-password').type('11223344')
    cy.get('.MuiButton-label').click 

      
})

it ('login with correct mobile number and wrong password',function(){

    cy.visit('http://boilerplate-react.accucia.com')
    cy.get('#mobile_number').type('9960736369')
    cy.get('.MuiButton-label').click()
    
    cy.get('#login-password').type('112233')
    cy.get('.MuiButton-label').click
   

      
})

it ('login with wrong mobile number and correct password',function(){

    cy.visit('http://boilerplate-react.accucia.com')
    cy.get('#mobile_number').type('8484003712')
    cy.get('.MuiButton-label').click()
    cy.get('#login-password').type('11223344').click()
    cy.get('.MuiButton-label')

      
})

it ('login with wrong  value',function(){

    cy.visit('http://boilerplate-react.accucia.com')
    cy.get('#mobile_number').type('8484003712')
    cy.get('.MuiButton-label').click()
    cy.get('#login-password').type('11223344').click()
    cy.get('.MuiButton-label')

      
})