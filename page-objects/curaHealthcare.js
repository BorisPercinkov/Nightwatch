module.exports = {
url: 'https://katalon-demo-cura.herokuapp.com/',

elements: {
    /*Step one */
     header :'.text-vertical-center',     
     makeAppointmentButton : '#btn-make-appointment',
     /* Step Two */
     userField : 'input[id="txt-username"]' ,
     pwField : 'input[id="txt-password"]', 
     usernameLabel : '.form-control[aria-describedby="demo_username_label"]',
     passwordLabel : '.form-control[aria-describedby="demo_password_label"]',
     loginButton : 'button[id="btn-login"]',
     /* Step Three */
     readmissionCheckbox :{
         locateStrategy: 'xpath',
         selector: "//input[@type='checkbox']"},
     radioBtnMedicaid :{
         locateStrategy : 'xpath',
         selector: "//input[@value='Medicaid']"},
     dateField : {
         locateStrategy : 'xpath',
         selector:"//input[@type='text']"},
     commentField : {
         locateStrategy : 'xpath',
         selector:"//*[@name='comment']"},
     submitButton : {
         locateStrategy : 'xpath',
         selector:"//button[@type='submit']"}
    },


commands: [{
    selectDropdownValue: function(option){
         return this          
         .click(`#combo_facility option[value="${option}"]`)
        },
    
    validateText (object,value){
         return this
            .assert.visible(object)
            .assert.containsText(object,value)    
    },

    validateAndClick (object){
        return this
           .assert.visible(object)
           .click(object)    
   },

   addComment (object,comment){
    return this
       .assert.visible(object)
       .click(object)    
       .setValue(object,comment)
    }
}
]
};