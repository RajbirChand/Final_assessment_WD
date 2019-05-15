

function saveMessage() {
    var name = document.getElementById('txt-name').value;
    var email = document.getElementById('txt-email').value;
    var phone = document.getElementById('txt-phone').value;
    var message = document.getElementById('txt-message').value;

    if (name == '' || email == '' || phone == '' || message == '') {
        alert('Please fill all fields.');
    } else {
        alert("Your message has been saved.");
    }
}