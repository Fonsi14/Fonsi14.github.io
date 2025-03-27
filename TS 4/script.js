const dishes = {
    adobo: { 
        title: "Adobo", 
        image: "https://www.maggi.ph/sites/default/files/srh_recipes/41d16b3eb7ce08aba9e9114f304f5d87.jpg", 
        description: "A savory and tangy dish with soy sauce and vinegar." 
    },
    sinigang: { 
        title: "Sinigang", 
        image: "https://www.maggi.ph/sites/default/files/srh_recipes/442ce059c4c490e1ab61cdaef9c98511.jpg", 
        description: "A sour tamarind-based soup." 
    },
    lechon: { 
        title: "Lechon", 
        image: "https://www.maggi.ph/sites/default/files/srh_recipes/85051e46dc3b30841f7889708728995b.jpg", 
        description: "A whole roasted pig with crispy skin." 
    },
    halohalo: { 
        title: "Halo-Halo", 
        image: "https://assets.bonappetit.com/photos/60e46c6701084801b06de2a3/master/pass/Halo-Halo-Recipe-2021.jpg", 
        description: "A mix of sweet toppings with shaved ice and milk." 
    },
    pancit: { 
        title: "Pancit", 
        image: "https://pickledplum.com/wp-content/uploads/2015/11/filipino-pancit-1200.jpg", 
        description: "A Filipino noodle dish for celebrations." 
    }
};

function openPopup(dishKey) {
    const popup = document.getElementById("popup");
    const titleEl = document.getElementById("popup-title");
    const imageEl = document.getElementById("popup-image");
    const descEl = document.getElementById("popup-description");

    // Check if dish exists
    if (!dishes[dishKey]) {
        console.error(`Dish "${dishKey}" not found.`);
        return;
    }

    // Update popup content
    titleEl.innerText = dishes[dishKey].title;
    imageEl.src = dishes[dishKey].image;
    descEl.innerText = dishes[dishKey].description;

    // Add active class to show popup with animation
    popup.classList.add("active");
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("active");
}

// Close popup when clicking outside the content
document.addEventListener("click", (event) => {
    const popupContent = document.querySelector(".popup-content");
    const popup = document.getElementById("popup");

    if (popup.classList.contains("active") && !popupContent.contains(event.target)) {
        closePopup();
    }
});
