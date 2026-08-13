// Simple form validation for enquiry page
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name == "" || email == "") {
        alert("Please fill in your Name and Email");
        return false;
    }
    
    // Check if email looks valid
    if (!email.includes("@")) {
        alert("Please enter a valid email address");
        return false;
    }

    alert("Thank you " + name + "! We will get back to you soon at " + email);
    return true;
}

// Welcome message on home page
console.log("Welcome to Cape Bean Coffee Co website");