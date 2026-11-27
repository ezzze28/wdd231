const firstNameInput = document.getElementById("firstName"); //Required
const lastNameInput = document.getElementById("lastName"); //Required
const positionTitleInput = document.getElementById("positionTitle"); //Optional
const emailInput = document.getElementById("email"); //Required
const phoneInput = document.getElementById("phone"); //Required
const membershipLevel = document.getElementById("membershipLevel"); //Selector
const businessNameInput = document.getElementById("business"); //Required
const comments = document.getElementById("comments"); //Optional

const submitButton = document.getElementById("submitBtn");

const validatefirstName = (firstName) => {
  const patron = /^[a-zA-Z\s\-]{3,}$/;
  return patron.test(firstName);
};
firstNameInput.addEventListener("input", () => {
  const name = firstNameInput.value.trim();
  const isValid = validatefirstName(name);

  if (isValid || name.length === 0) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

const validateLastName = (lastName) => {
  const patron = /^[a-zA-Z\s\-]{3,}$/;
  return patron.test(lastName);
};
lastNameInput.addEventListener("input", () => {
  const lastName = lastNameInput.value.trim();
  const isValid = validatefirstName(lastName);

  if (isValid || lastName.length === 0) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

const validateBusinessPosition = (title) => {
  const patron = /^[a-zA-Z\s\-]{7,}$/;
  return patron.test(title);
};
positionTitleInput.addEventListener("input", () => {
  const title = positionTitleInput.value;
  const isValid = validateBusinessPosition(title);

  if (isValid) {
    submitButton.disabled = false;
    document.getElementById("validationMessage").textContent = "";
  } else {
    submitButton.disabled = true;
    document.getElementById("validationMessage").textContent =
      "Please enter a valid business position title (minimum 7 characters with only letters, hyphens, and spaces).";
  }
});

const validateEmail = (email) => {
  const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return patron.test(email);
};
emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim();
  const isValid = validatefirstName(email);

  if (isValid || email.length === 0) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

const validatePhone = (phone) => {
  const patron = /^[0-9\s\-]{7,}$/;
  return patron.test(phone);
};
phoneInput.addEventListener("input", () => {
  const phone = phoneInput.value.trim();
  const isValid = validatefirstName(phone);

  if (isValid || phone.length === 0) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

const validateBusinessName = (businessName) => {
  const patron = /^[a-zA-Z\s\-]{7,}$/;
  return patron.test(businessName);
};
businessNameInput.addEventListener("input", () => {
  const businessName = businessNameInput.value.trim();
  const isValid = validatefirstName(businessName);

  if (isValid || businessName.length === 0) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

const firstName = firstNameInput.value.trim();
const lastName = lastNameInput.value.trim();
const email = emailInput.value.trim();
const phone = phoneInput.value.trim();
const businessName = businessNameInput.value.trim();

const completedFields =
  firstName !== "" &&
  lastName !== "" &&
  email !== "" &&
  phone !== "" &&
  businessName !== "";

if (completedFields) {
  submitButton.disabled = false;
} else {
  submitButton.disabled = true;
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const positionTitle = positionTitleInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const membershipLevelChosen = membershipLevel.value;
  const businessName = businessNameInput.value;
  const commentsAdded = comments.value;

  const currentDatetimeValue = new Date();

  const day = currentDatetimeValue.getDate();
  const month = currentDatetimeValue.getMonth() + 1;
  const year = currentDatetimeValue.getFullYear();
  const formattedDate = `${year}/${month}/${day}`;

  const hours = currentDatetimeValue.getHours();
  const minutes = currentDatetimeValue.getMinutes();
  const formattedTime = `${hours}:${minutes}`;

  const formattedDateTime = `${formattedDate} ${formattedTime}`;

  const url = `thankyou.html?firstName=${encodeURIComponent(
    firstName,
  )}&lastName=${encodeURIComponent(
    lastName,
  )}&positionTitle=${encodeURIComponent(
    positionTitle,
  )}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(
    phone,
  )}&membershipLevel=${encodeURIComponent(
    membershipLevelChosen,
  )}&businessName=${encodeURIComponent(
    businessName,
  )}&commentsAdded=${encodeURIComponent(
    commentsAdded,
  )}&currentDatetime=${encodeURIComponent(formattedDateTime)}`;

  window.location.href = url;
});
