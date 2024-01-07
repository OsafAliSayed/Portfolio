function sendEmail() {
    Email.send({
        SecureToken: "cf2f9983-c459-4c05-b337-139160eac0c8",
        To : 'osafalisayed@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Query",
        Body : `Name: ${document.getElementById("name").value} <br/> Email: ${document.getElementById("email").value} <br/> Subject: ${document.getElementById("subject").value} <br/> Message: ${document.getElementById("message").value}`
    }).then(
    message => alert("Message Sent Successfully")
    );
}