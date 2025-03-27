const dishes = {
    adobo: {
        title: "Adobo",
        image: "https://www.maggi.ph/sites/default/files/srh_recipes/41d16b3eb7ce08aba9e9114f304f5d87.jpg",
        description: "A classic Filipino dish made with soy sauce, vinegar, and tender meat."
    },
    sinigang: {
        title: "Sinigang",
        image: "https://www.maggi.ph/sites/default/files/srh_recipes/442ce059c4c490e1ab61cdaef9c98511.jpg",
        description: "A comforting sour soup with pork, shrimp, or beef in tamarind broth."
    },
    lechon: {
        title: "Lechon",
        image: "https://www.maggi.ph/sites/default/files/srh_recipes/85051e46dc3b30841f7889708728995b.jpg",
        description: "Crunchy and juicy roasted pig, a staple at Filipino celebrations."
    },
    halohalo: {
        title: "Halo-Halo",
        image: "https://assets.bonappetit.com/photos/60e46c6701084801b06de2a3/master/pass/Halo-Halo-Recipe-2021.jpg",
        description: "A refreshing dessert with shaved ice, sweetened fruits, and leche flan."
    },
    pancit: {
        title: "Pancit",
        image: "https://pickledplum.com/wp-content/uploads/2015/11/filipino-pancit-1200.jpg",
        description: "Flavorful stir-fried noodles with vegetables and meat, perfect for celebrations."
    }
};

function openPopup(dish) {
    if (dishes[dish]) {
        document.getElementById("popup-title").innerText = dishes[dish].title;
        document.getElementById("popup-image").src = dishes[dish].image;
        document.getElementById("popup-description").innerText = dishes[dish].description;
        document.getElementById("popup").style.display = "flex";
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
