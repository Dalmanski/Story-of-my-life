const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementById("closeImg");

const images = document.querySelectorAll('.image-section img');

images.forEach((img) => {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

closeBtn.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");
const loginBtn = document.getElementById("loginBtn");
const closeLogin = document.getElementById("closeLogin");
const closeSignup = document.getElementById("closeSignup");
const signupLink = document.getElementById("signupLink");

loginBtn.onclick = function () {
    loginModal.style.display = "block";
};

closeLogin.onclick = function () {
    loginModal.style.display = "none";
};

signupLink.onclick = function () {
    signupModal.style.display = "block";
    loginModal.style.display = "none";
};

closeSignup.onclick = function () {
    signupModal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == signupModal) {
        signupModal.style.display = "none";
    }
};

function toggleHeader() {
    const header = document.querySelector('header');
    const navLinks = document.querySelector('.nav-links');
    const expandBtn = document.querySelector('.expand-btn');

    if (header.classList.contains('collapsed')) {
        header.classList.remove('collapsed');
        expandBtn.textContent = 'Close';
        navLinks.style.display = 'flex';
    } else {
        header.classList.add('collapsed');
        expandBtn.textContent = 'Expand';
        navLinks.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const homeLink = document.getElementById('homeLink');
    const myLifeLink = document.getElementById('myLifeLink');
    // const life2024Link = document.getElementById('life2024Link');
    const aboutLink = document.getElementById('aboutLink');

    const homeSection = document.getElementById('homeSection');
    const myLifeSection = document.getElementById('myLifeSection');
    // const life2024Section = document.getElementById('life2024Section');
    const aboutSection = document.getElementById('aboutSection');

    // Function to show a specific section and hide others
    function showSection(sectionToShow) {
        homeSection.style.display = 'none';
        myLifeSection.style.display = 'none';
        // life2024Section.style.display = 'none';
        aboutSection.style.display = 'none';

        sectionToShow.style.display = 'block';
    }

    homeLink.addEventListener('click', () => showSection(homeSection));
    myLifeLink.addEventListener('click', () => showSection(myLifeSection));
    // life2024Link.addEventListener('click', () => showSection(life2024Section));
    aboutLink.addEventListener('click', () => showSection(aboutSection));

    showSection(homeSection);
});