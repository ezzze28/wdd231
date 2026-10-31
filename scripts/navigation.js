const navButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

navButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  navButton.classList.toggle("open");
});
