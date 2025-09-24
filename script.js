function getFormvalue(event) {
    event.preventDefault(); // prevent page reload

    // Access form values
    let firstName = document.forms["form1"]["fname"].value.trim();
    let lastName = document.forms["form1"]["lname"].value.trim();

    // Handle empty fields
    if (!firstName && !lastName) {
        alert("Please enter your First Name and Last Name.");
        return;
    } else if (!firstName) {
        alert("Please enter your First Name.");
        return;
    } else if (!lastName) {
        alert("Please enter your Last Name.");
        return;
    }

    // Show full name
    alert(firstName + " " + lastName);
}