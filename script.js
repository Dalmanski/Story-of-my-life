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
    const aboutLink = document.getElementById('aboutLink');
    let activeSection = document.getElementById('homeSection'); 

    function showSection(newSection) {
        if (activeSection === newSection) return; // Prevent redundant clicks

        activeSection.classList.remove('fade-slide-right');
        activeSection.classList.add('fade-slide-left');

        setTimeout(() => {
            activeSection.style.display = 'none';
            activeSection.classList.remove('fade-slide-left');

            newSection.style.display = 'block';
            setTimeout(() => {
                newSection.classList.add('fade-slide-right');
            }, 10);

            activeSection = newSection; 
        }, 500); 
    }

    homeLink.addEventListener('click', () => showSection(document.getElementById('homeSection')));
    myLifeLink.addEventListener('click', () => showSection(document.getElementById('myLifeSection')));
    aboutLink.addEventListener('click', () => showSection(document.getElementById('aboutSection')));

    activeSection.style.display = 'block';
    setTimeout(() => {
        activeSection.classList.add('fade-slide-right');
    }, 10);
});
