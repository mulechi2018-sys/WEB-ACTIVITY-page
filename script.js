// JavaScript// ===============================
// ICT251 Activity 3 JavaScript
// ===============================
// ===============================
// 1. CONTACT FORM VALIDATION
// ===============================
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");
const formPreview = document.getElementById("formPreview");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate name
        if (name === "") {
            formFeedback.textContent = "Please enter your name.";
            formFeedback.className = "error";
            formPreview.innerHTML = "";
            return;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formFeedback.textContent = "Please enter a valid email address.";
            formFeedback.className = "error";
            formPreview.innerHTML = "";
            return;
        }

        // Validate message
        if (message === "") {
            formFeedback.textContent = "Please enter a message.";
            formFeedback.className = "error";
            formPreview.innerHTML = "";
            return;
        }

        // Successful validation
        formFeedback.textContent =
            "The information has been successfully validated.";
        formFeedback.className = "success";

        // Clear previous preview
        formPreview.innerHTML = "";

        const previewTitle = document.createElement("h3");
        previewTitle.textContent = "Message Preview";

        const previewName = document.createElement("p");
        previewName.textContent = "Name: " + name;

        const previewEmail = document.createElement("p");
        previewEmail.textContent = "Email: " + email;

        const previewMessage = document.createElement("p");
        previewMessage.textContent = "Message: " + message;

        const previewStatus = document.createElement("p");
        previewStatus.textContent =
            "Status: Data validated successfully. No message was sent.";

        formPreview.appendChild(previewTitle);
        formPreview.appendChild(previewName);
        formPreview.appendChild(previewEmail);
        formPreview.appendChild(previewMessage);
        formPreview.appendChild(previewStatus);
    });
}


// ===============================
// 2. EXPANDABLE PROJECT DETAILS
// ===============================

const detailButtons = document.querySelectorAll(".detailsButton");

detailButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        const details = button.nextElementSibling;

        if (details.style.display === "block") {
            details.style.display = "none";
            button.textContent = "Show Details";
            button.setAttribute("aria-expanded", "false");
        } else {
            details.style.display = "block";
            button.textContent = "Hide Details";
            button.setAttribute("aria-expanded", "true");
        }
    });
});


// ===============================
// 3. GALLERY VIEWER
// ===============================

const galleryItems = [
    {
        image: "images/photo1.jpg",
        caption: "My first photo",
        alt: "Photo 1 from my personal gallery"
    },
    {
        image: "images/photo2.jpg",
        caption: "My second photo",
        alt: "Photo 2 from my personal gallery"
    },
    {
        image: "images/photo3.jpg",
        caption: "My third photo",
        alt: "Photo 3 from my personal gallery"
    }
];

let currentGalleryIndex = 0;

const galleryImage = document.getElementById("galleryImage");
const galleryCaption = document.getElementById("galleryCaption");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

function showGalleryItem(index) {

    if (!galleryImage || !galleryCaption) {
        return;
    }

    galleryImage.src = galleryItems[index].image;
    galleryImage.alt = galleryItems[index].alt;
    galleryCaption.textContent = galleryItems[index].caption;

    if (previousButton) {
        previousButton.disabled = index === 0;
    }

    if (nextButton) {
        nextButton.disabled = index === galleryItems.length - 1;
    }
}

if (previousButton) {
    previousButton.addEventListener("click", function () {

        if (currentGalleryIndex > 0) {
            currentGalleryIndex--;
            showGalleryItem(currentGalleryIndex);
        }
    });
}

if (nextButton) {
    nextButton.addEventListener("click", function () {

        if (currentGalleryIndex < galleryItems.length - 1) {
            currentGalleryIndex++;
            showGalleryItem(currentGalleryIndex);
        }
    });
}

showGalleryItem(currentGalleryIndex);


// ===============================
// 4. PROJECT SEARCH / FILTER
// ===============================

const projectSearch = document.getElementById("projectSearch");
const resetSearch = document.getElementById("resetSearch");
const searchMessage = document.getElementById("searchMessage");
const projectCards = document.querySelectorAll(".project-card");

function filterProjects() {

    const searchTerm = projectSearch.value.toLowerCase().trim();
    let matchCount = 0;

    projectCards.forEach(function (card) {

        const projectText = card.textContent.toLowerCase();

        if (projectText.includes(searchTerm)) {
            card.style.display = "block";
            matchCount++;
        } else {
            card.style.display = "none";
        }
    });

    if (searchTerm === "") {
        searchMessage.textContent = "";
    } else if (matchCount === 0) {
        searchMessage.textContent =
            "No projects match your search.";
    } else {
        searchMessage.textContent =
            matchCount + " project(s) found.";
    }
}

if (projectSearch) {
    projectSearch.addEventListener("input", filterProjects);
}

if (resetSearch) {
    resetSearch.addEventListener("click", function () {

        projectSearch.value = "";

        projectCards.forEach(function (card) {
            card.style.display = "block";
        });

        searchMessage.textContent = "";
    });
}


// ===============================
// 5. DARK / LIGHT THEME SWITCH
// ===============================

const themeButton = document.getElementById("themeButton");

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            themeButton.textContent = "Switch to Light Theme";
        } else {
            themeButton.textContent = "Switch to Dark Theme";
        }
    });
}