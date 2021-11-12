const menuButton = document.querySelector('.navMobile');
const menu = document.querySelector('.menuContainer');
const closeButton = document.querySelector('.closeButton');
const menuLink1 = document.querySelector('.menuLink1');
const menuLink2 = document.querySelector('.menuLink2');
const menuLink3 = document.querySelector('.menuLink3');
const workPart = document.getElementById('lastWork');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('isActive');
  menu.classList.toggle('isActive');
});

closeButton.addEventListener('click', () => {
  menuButton.classList.remove('isActive');
  menu.classList.remove('isActive');
});

menuLink1.addEventListener('click', () => {
  menuButton.classList.remove('isActive');
  menu.classList.remove('isActive');
});

menuLink2.addEventListener('click', () => {
  menuButton.classList.remove('isActive');
  menu.classList.remove('isActive');
});

menuLink3.addEventListener('click', () => {
  menuButton.classList.remove('isActive');
  menu.classList.remove('isActive');
});

const projectsDetails = [
  {
    id: 1,
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['CSS', 'HTML', 'RUBY', 'BOOTSTRAP'],
    image: './images/number1.jpg',
    link: 'https://github.com/ReAliens/Portofilo',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['CSS', 'HTML', 'RUBY', 'BOOTSTRAP'],
    image: './images/number2.jpg',
    link: 'https://github.com/ReAliens/Portofilo',
  },
  {
    id: 3,
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['CSS', 'HTML', 'RUBY', 'BOOTSTRAP'],
    image: './images/number3.jpg',
    link: 'https://github.com/ReAliens/Portofilo',
  },
  {
    id: 4,
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['CSS', 'HTML', 'RUBY', 'BOOTSTRAP'],
    image: './images/number4.jpg',
    link: 'https://github.com/ReAliens/Portofilo',
  },
];

const addElements = () => {
  projectsDetails.map((project) => {
    const projectSummary = `
    <section class='work ws-${project.id}' id='third-section'>
    <img src='${project.image}' alt='cover' />
    <div class='work-story'>
    <h2>${project.name}</h2>
    <p>
    ${project.description}
    </p>
    <ul class='w-section-tech'>
    ${project.technologies
    .map(
      (item, index) => `<li class=${index === 3 ? 'last-tech' : ''}>${item}</li>`,
    )
    .join('')}
      </ul>
      <button data-modal=${
  project.id
} type='button' class='viewButton'>See Project</button>
      </section>`;
    return workPart.insertAdjacentHTML('beforeend', projectSummary);
  });
};

window.onload = addElements();

const modal = document.getElementById('modal');
const onModalOpen = (id) => {
  document.body.style.overflow = 'hidden';
  const selectedModal = projectsDetails.find(
    (project) => project.id === Number(id),
  );
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalDescreption = document.getElementById('modalDesc');
  const modalList = document.getElementById('modalList');
  const modalLiveLink = document.getElementById('goLive');
  const modalSoucreLink = document.getElementById('source');

  modalTitle.textContent = selectedModal.name;
  modalImage.src = selectedModal.image;
  modalDescreption.textContent = selectedModal.description;
  modalList.innerHTML = '';
  selectedModal.technologies.map((tech, index) => {
    const techs = `<li class=${index === 3 ? 'last-tech' : ''}>${tech}</li>`;
    return modalList.insertAdjacentHTML('beforeend', techs);
  });
  modalLiveLink.setAttribute('href', `${selectedModal.link}`);
  modalSoucreLink.setAttribute('href', `${selectedModal.link}`);
  modal.style.display = 'block';
};

document.querySelectorAll('.viewButton').forEach((button) => {
  button.addEventListener('click', () => {
    onModalOpen(button.dataset.modal);
  });
});

const modalCloseButton = document.getElementById('modalCloseButton');

modalCloseButton.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'visible';
});

const validateEmailInput = () => {
  const form = document.getElementById('contactForm');
  const email = document.getElementById('email');
  const errMsg = document.getElementById('errorMsg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (email.value === email.value.toLowerCase()) {
      errMsg.textContent = 'please insert email with lowerCase characters only';
      errMsg.style.color = 'red';
    } else {
      errMsg.textContent = '';
      form.submit();
    }
  });
};

window.onload = () => {
  validateEmailInput();
};

const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const textArea = document.getElementById('msg');

const storageAvailable = (type) => {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      && (e.code === 22
        || e.code === 1014
        || e.name === 'QuotaExceededError'
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      && storage
      && storage.length !== 0
    );
  }
};

if (storageAvailable('localStorage') && localStorage.getItem('userData')) {
  const userData = JSON.parse(localStorage.getItem('userData'));
  inputName.value = userData.name;
  inputEmail.value = userData.email;
  textArea.value = userData.msg;
}

const populateStorage = () => {
  if (storageAvailable('localStorage')) {
    const userData = {
      email: inputEmail.value,
      name: inputName.value,
      msg: textArea.value,
    };
    const userDataStr = JSON.stringify(userData);
    localStorage.setItem('userData', userDataStr);
  }
};
inputName.onchange = populateStorage;
inputEmail.onchange = populateStorage;
textArea.onchange = populateStorage;
