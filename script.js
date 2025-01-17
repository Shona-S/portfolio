function switchTab(tabNumber) {
    document.querySelectorAll('.tab').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.tab:nth-child(${tabNumber})`).classList.add('active');

    document.querySelectorAll('.project-container').forEach(container => {
        container.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabNumber}"]`).classList.add('active');
}

function expandProject(card) {
    const isExpanded = card.classList.contains("expanded");
    
    // Close any expanded project
    const allCards = document.querySelectorAll(".project-card");
    allCards.forEach((project) => {
        project.classList.remove("expanded");
        project.querySelector(".expanded-content").style.display = "none";
    });

    // Toggle the expanded state of the clicked card
    if (!isExpanded) {
        card.classList.add("expanded");
        card.querySelector(".expanded-content").style.display = "flex";
    }
}

// Get the modal, button, and close elements
var modal = document.getElementById("imageModal");
var btn = document.getElementById("showImageBtn");
var span = document.getElementsByClassName("close")[0];
var modalImage = document.getElementById("modalImage");

// Get all the buttons with class "showImageBtn"
var buttons = document.querySelectorAll(".showImageBtn");
var modal = document.getElementById("imageModal");
var modalImage = document.getElementById("modalImage");
var span = document.getElementsByClassName("close")[0];



