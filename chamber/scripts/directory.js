const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#dataContainer");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
  gridbutton.classList.add("active");
  listbutton.classList.remove("active");
});

listbutton.addEventListener("click", showList);
function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
  listbutton.classList.add("active");
  gridbutton.classList.remove("active");
}

//URL of Data
const url = "./data/members.json";

const getCompaniesData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.companies;
};

const fetchDataAndDisplay = async () => {
  const companies = await getCompaniesData(url);
  displayCompanies(companies);
};

const displayCompanies = (dataReceived) => {
  const dataContainer = document.getElementById("dataContainer");

  dataReceived.forEach(
    ({
      name,
      email,
      phone,
      image,
      url,
      membership_level,
      additional_information,
    }) => {
      let card = document.createElement("section");

      card.innerHTML = `<h2>${name}</h2>
                  <p class="membership-level">Membership: ${membership_level}</p>
                  <img src="${image}" alt="Logo of ${name}" loading="lazy" width="340" height="440"></img>
                  <p class="aditional-info">${additional_information}</p>
                  <hr>
                  <p class="email">${email}</p>
                  <p class="website">+${phone} | <a href="${url}">Website</a></p>
					        `;
      dataContainer.appendChild(card);
    },
  );
};

fetchDataAndDisplay();
