// Function to open modal
function openModal(element) {
    const modal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");
    const imageCaption = document.getElementById("imageCaption");
    
    const img = element.querySelector(".project-img").src; // Get the image source
    const title = element.querySelector(".project-title span").innerText; // Get the title

    fullImage.src = img; // Set the modal image source
    imageCaption.innerText = title; // Set the caption
    modal.style.display = "block"; // Show the modal
}

// Close modal
const closeModal = document.getElementsByClassName("close")[0];
closeModal.onclick = function() {
    document.getElementById("imageModal").style.display = "none";
}

// Next/Previous functionality (optional)
const next = document.getElementsByClassName("next")[0];
const prev = document.getElementsByClassName("prev")[0];

next.onclick = function() {
    // Logic for showing next image
}

prev.onclick = function() {
    // Logic for showing previous image
}
