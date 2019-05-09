function sendMail(contactForm) {
    emailjs.send("outlook", "nz_holiday_helper", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value
    })
    .then (
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
       ),
    return false; 
}

