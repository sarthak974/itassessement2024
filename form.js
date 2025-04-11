
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value;
  const address = document.getElementById("address").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name || !dob || !address || !email || !phone) {
    alert("Please fill out all fields.");
    return false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (phone.length < 10 || isNaN(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}

 