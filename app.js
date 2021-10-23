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

  function checkInputs(number, msg) {
    const innerContainer = document.querySelector(".donation-inner");
    const outerButton = document.getElementById("donate-button");
    if (number === "" || number === undefined) {
      const containerMessage = document.createElement("div");
      const message = document.createElement("p");
      message.textContent = msg;
      containerMessage.appendChild(message);
      containerMessage.style.marginTop = 15 + "px";
      innerContainer.append(containerMessage);
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

  function checkPersonalInfo(name, lastName, email, mess) {
    if (name == "" || lastName == "" || email === "") {
      const containerMessage = document.createElement("div");
      const message = document.createElement("p");
      message.textContent = mess;
      message.style.fontSize = 12 + "px";
      message.style.textAlign = "center";
      containerMessage.appendChild(message);
      containerMessage.style.marginTop = 15 + "px";
      form.append(containerMessage);
    } else {
      form.lastElementChild.remove()
      alert('Thank you for Donation')
      form.submit()
    }
  }
});
