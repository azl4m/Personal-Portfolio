
$(function() {
    var $registration=$('#registration');
    $registration.validate({
        rules:{
            name:{
              required:true,
              minlength:4 
             
            },
            email:{
                required:true,
                minlength:6


            },
            phone:{
                required:true,
                minlength:10
            },
            message:{
                required:true,
                
            }


        },
        messages:{
            name:{
                required:'Please enter your name',
                minlength:'Please enter a valid name'
            },
            email:{
                required:'Please enter your district',
                minlength:'Please enter a valid district name'

            },
            phone:{
                required:'Please enter your phone number',
                minlength:'Please enter a valid mobile number'
            },
            message:{
                required:'Please enter your message'
                
           }



        }

    })
})

const form = document.querySelector("#registration")
   const submitButton = document.querySelector("#submit")
   const scriptURL = 'https://script.google.com/macros/s/AKfycbwG1mWcWxNUK5KoWpLMUi73LeBIbFSxOVnxybAnpz_9LFpq9rKUUizwXg8jAsG0nCB5/exec'

   form.addEventListener('submit', e => {
     submitButton.disabled = true
     e.preventDefault()
     let requestBody = new FormData(form)
     fetch(scriptURL, { method: 'POST', body: requestBody})
       .then(response => {
          alert('Success!', response)
          submitButton.disabled = false
         })
       .catch(error => {
       alert('Error!', error.message)
         submitButton.disabled = false

       }
       )
   })