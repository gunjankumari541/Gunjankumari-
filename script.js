// Mobile menu

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    if (navLinks) {
        navLinks.classList.toggle("active");
    }
}


// Product order button

function orderProduct(productName) {

    const phoneNumber = "919783225660";

    const message =
        "Hello Leena Fashion, I am interested in ordering the " +
        productName +
        ". Please provide more details.";

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}


// Contact form

function sendMessage(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
        "Hello Leena Fashion!" +
        "\n\nName: " + name +
        "\nPhone: " + phone +
        "\nMessage: " + message;

    const whatsappURL =
        "https://wa.me/919783225660?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
}
