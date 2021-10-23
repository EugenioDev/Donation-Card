document.addEventListener("DOMContentLoaded", function () {
  const donationInput = document.getElementById("inputDonation");
  const donateButton = document.getElementById("donate");

  donateButton.addEventListener("click", () => {
    let tipsDonation = document.getElementById("donation-input-value");
    let donationValue = donationInput.value;
    tipsDonation.textContent = donationValue;

    checkInputs(donationValue, "Inserisci almeno 1 numero");
  });

  const smallContainer = document.querySelector(".donation-container");
  const profileContainer = document.querySelector(
    ".personal-information-container"
  );

  const error = document.querySelector('.messageString')
  function checkInputs(number, msg) {
    const innerContainer = document.querySelector(".donation-inner");
    const outerButton = document.getElementById("donate-button");
    if (number == "") {
      error.textContent = msg
    } else if (number > 0) {
      smallContainer.style.display = "none";
      profileContainer.style.display = "block";
    }
  }
  

  form.addEventListener("submit", (event) => {
    const form = document.getElementById("form");
    const name = document.getElementById("name");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");

    const nameValue = name.value;
    const secondName = lastName.value;
    const emailValue = email.value;
    event.preventDefault();
    checkPersonalInfo(
      nameValue,
      secondName,
      emailValue,
      "I campi non possono essere vuoti"
    );
  });
  const errorForm = document.querySelector('.error')
  function checkPersonalInfo(name, lastName, email, mess) {
    if (name == "" || lastName == "" || email === "") {
      errorForm.textContent = mess
    } else {
      
      errorForm.textContent = "Grazie per aver Donato"
      setTimeout(function(){ 
        form.submit(); }, 2000)
      
    }
  }
});
