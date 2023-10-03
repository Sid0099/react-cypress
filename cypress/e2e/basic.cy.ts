import { Loginpage } from "../pages.cy.js/login_page_nothardcoded"

 let loginpg = new Loginpage



it('Login with Correct id and pass', function(){

    loginpg.navigation('http://172.105.36.107:4101/login')   // non Hard coded
    loginpg.enterusername('9960736369{enter}')
    loginpg.enterpass('11223344')
    loginpg.clickLogin()
    cy.get('.toastr').contains('User logged in successfully')
            
})
it('Login with Correct id and and wrong pass', function(){

    loginpg.navigation('http://172.105.36.107:4101/login')   // non hard coded
    loginpg.enterusername('9960736369{enter}')
    
    loginpg.enterpass('112233')
    cy.get('.toastr').contains('Your Password does not matched!!')
    loginpg.clickLogin()

})
it('Login with Wrong id and correct pass', function(){

    loginpg.navigation('http://172.105.36.107:4101/login')   // non hard coded
    loginpg.enterusername('9960736333{enter}')
    cy.get('.toastr-message').then(($toastMessage) => {
        const messageText = $toastMessage.text();

        if (messageText.includes('Mobile Number not exist!')) {
            // Skip the login action if the message is present
            // You can add assertions or additional steps here if needed
        } 
        else
         {
    loginpg.enterpass('11223344')
    loginpg.clickLogin()
        }
    })

})
it('Login with Wrong id and pass', function(){

    loginpg.navigation('http://172.105.36.107:4101/login')   // non haed coded
    loginpg.enterusername('9960736344{enter}')
    loginpg.enterpass('112233')
    loginpg.clickLogin()

})