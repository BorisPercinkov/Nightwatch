module.exports = {     
       'Step One: Navigate to URL and click Make Appointment' (browser) {

        /* Navigate to the specified default url, and click the button */
        let pageObj = browser.page.curaHealthcare();
        const headerText = 'CURA Healthcare Service'  
        
         pageObj
        .navigate()
        .saveScreenshot('tests_output/step_one.png')
        .validateText('@header',headerText)   
        .validateAndClick('@makeAppointmentButton')
    },

    'Step Two: Login'(browser){
        let pageObj = browser.page.curaHealthcare();
                
       /* Get the Username & Password from the page and use them to log in */ 
         pageObj
        .assert.visible('@userField') 
        .getValue ('@usernameLabel',function (result) { pageObj.setValue('@userField',result.value) }) /*   This is not a real case scenario since   */
        .assert.visible('@pwField')                                                                    /* no one would provide login info, but it is */
        .getValue ('@passwordLabel',function (result) { pageObj.setValue('@pwField',result.value) })   /* a good example for handling dynamic fields */
        .saveScreenshot('tests_output/step_two.png')      
        .click('@loginButton')
    },

    'Step Three: Fill page data to make appointment' (browser){
        let pageObj = browser.page.curaHealthcare();

        /* Make use of the moment libary to store the today's date in the desired date format and parse it later through the const */
        var moment = require('moment')  
        
        /* Declare constants with xPath selector */
        const DropdownValue = "Seoul CURA Healthcare Center"
        const AppointmentDate = moment().format("DD/MM/YYYY")
        const CommentText = "This comment is automatically populated by chrome WebDriver"
        
             
        /* Populate the 'Make Appointment' page */
     pageObj 
     .selectDropdownValue(DropdownValue) 
     .validateAndClick('@readmissionCheckbox')
     .validateAndClick('@radioBtnMedicaid')    
     .setValue('@dateField', AppointmentDate)  
     .addComment('@commentField',CommentText)
     .saveScreenshot('tests_output/step_three_before_submit.png')
     .validateAndClick('@submitButton')
     .saveScreenshot('tests_output/step_three_after_submit.png')
     .end()
    },    
}