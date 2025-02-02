document.getElementById("colorChangeBtn").addEventListener("click", function () {
    const resume = document.getElementById("resume");
    const darkMode = resume.style.backgroundColor === "darkslategray";

    if (darkMode) { 
        resume.style.backgroundColor = "lightgray";
        resume.style.color = "black";
    } else {
        resume.style.backgroundColor = "darkslategray";
        resume.style.color = "white";
    }
});  
