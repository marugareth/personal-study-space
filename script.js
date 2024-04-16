function showPlan() {
    tampilMenu("plan");
}

function showMain() {
    tampilMenu("main");
}

function showExplore(){
    tampilMenu("explore");
}

function showSection (sectionId){
    var sectionBaru = document.querySelectorAll("section");
    sectionBaru.forEach(function(section){
        section.style.display = (section.id === sectionId) ? "block" : "none";
    })
}