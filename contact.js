// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const message = document.getElementById("message").value.trim();
    
    let errors = [];

    if (!firstName) errors.push("First Name is required.");
    if (!lastName) errors.push("Last Name is required.");
    if (!email || !/\S+@\S+\.\S+/.test(email)) errors.push("Please enter a valid email.");
    if (!phoneNumber || !/^[0-9]{8,15}$/.test(phoneNumber)) errors.push("Please enter a valid phone number.");
    if (!message) errors.push("Message cannot be empty.");

    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        alert("✅ Thank you! Your message has been submitted.");
        this.reset();
    }
});

// Smooth Scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
    });
});

// Back-to-Top Button
const backToTopButton = document.createElement("button");
backToTopButton.innerText = "↑ Top";
Object.assign(backToTopButton.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "5px",
    backgroundColor: "#1A1A1A",
    color: "#FFFFFF",
    border: "none",
    cursor: "pointer",
    display: "none",
});
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    backToTopButton.style.display = window.scrollY > 200 ? "block" : "none";
});
