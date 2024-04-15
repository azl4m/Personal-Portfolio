
$(document).ready(function() {
  console.log("hi"),
  $("#registration").validate({
    rules:{
      name:{
        required:true,
        minlength:4
      }
    }
  })
})
