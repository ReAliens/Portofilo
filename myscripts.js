const menuButton = document.querySelector(".navMobile");
const menu = document.querySelector(".menuContainer");
const closeButton = document.querySelector(".closeButton");
const menuLink1 = document.querySelector(".menuLink1");
const menuLink2 = document.querySelector(".menuLink2");
const menuLink3 = document.querySelector(".menuLink3");
const workPart = document.getElementById("lastWork");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("isActive");
  menu.classList.toggle("isActive");
});

closeButton.addEventListener("click", () => {
  menuButton.classList.remove("isActive");
  menu.classList.remove("isActive");
});

menuLink1.addEventListener("click", () => {
  menuButton.classList.remove("isActive");
  menu.classList.remove("isActive");
});

menuLink2.addEventListener("click", () => {
  menuButton.classList.remove("isActive");
  menu.classList.remove("isActive");
});

menuLink3.addEventListener("click", () => {
  menuButton.classList.remove("isActive");
  menu.classList.remove("isActive");
});

const projectsDetails = [
  {
    id: 1,
    name: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ["CSS", "HTML", "RUBY", "BOOTSTRAP"],
    image: "./images/number1.jpg",
    link: "https://github.com/ReAliens/Portofilo",
  },
  {
    id: 2,
    name: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ["CSS", "HTML", "RUBY", "BOOTSTRAP"],
    image: "./images/number2.jpg",
    link: "https://github.com/ReAliens/Portofilo",
  },
  {
    id: 3,
    name: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ["CSS", "HTML", "RUBY", "BOOTSTRAP"],
    image: "./images/number3.jpg",
    link: "https://github.com/ReAliens/Portofilo",
  },
  {
    id: 4,
    name: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ["CSS", "HTML", "RUBY", "BOOTSTRAP"],
    image: "./images/number4.jpg",
    link: "https://github.com/ReAliens/Portofilo",
  },
];

projectsDetails.map((project) => {
  const projectSummary = `
  <section class="work ws-${project.id}" id="third-section">
  <img src="${project.image}" alt="cover" />
  <div class="work-story">
    <h2>${project.name}</h2>
    <p>
   ${project.description}
    </p>
    <ul class="w-section-tech">
    ${project.technologies
      .map((item, index) => {
        return `<li class=${index === 3 ? "last-tech" : ""}>${item}</li>`;
      })
      .join("")}
    </ul>
    <button data-modal=${
      project.id
    } type="button" class="viewButton">See Project</button>
</section>`;
  workPart.insertAdjacentHTML("beforeend", projectSummary);
});

const modal = document.getElementById("modal");
const onModalOpen = (id) => {
  document.body.style.overflow = "hidden";
  const selectedModal = projectsDetails.find(
    (project) => project.id === Number(id)
  );
  const modalTitle = document.getElementById("modalTitle");
  const modalImage = document.getElementById("modalImage");
  const modalDescreption = document.getElementById("modalDesc");
  const modalList = document.getElementById("modalList");
  const modalLiveLink = document.getElementById("goLive");
  const modalSoucreLink = document.getElementById("source");

  modalTitle.textContent = selectedModal.name;
  modalImage.src = selectedModal.image;
  modalDescreption.textContent = selectedModal.description;
  modalList.innerHTML = "";
  selectedModal.technologies.map((tech, index) => {
    const techs = `<li class=${index === 3 ? "last-tech" : ""}>${tech}</li>`;
    modalList.insertAdjacentHTML("beforeend", techs);
  });
  modalLiveLink.setAttribute("href", `${selectedModal.link}`);
  modalSoucreLink.setAttribute("href", `${selectedModal.link}`);
  modal.style.display = "block";
};

document.querySelectorAll(".viewButton").forEach((button) => {
  button.addEventListener("click", () => {
    onModalOpen(button.dataset.modal);
  });
});

const modalCloseButton = document.getElementById("modalCloseButton");

modalCloseButton.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "visible";
});
