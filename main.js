function toggleMenu(){
    document.getElementById("menu")
    .classList.toggle("show");
}
/* ===== ACTIVE MENU ===== */
function changeOptionStyle(el) {
    let items = document.querySelectorAll("li");
    items.forEach(li => {
        li.classList.remove("active");
    });
    el.classList.add("active");
}
/* ===== LOAD PAGE ===== */
function loadPage(page) { 
    fetch(`pages/${page}.html`) 
        .then(response => response.text()) 
        .then(data => { 
            document.getElementById("main-content").innerHTML = data; 
        }) 
        .catch(error => { 
            document.getElementById("main-content").innerHTML = "<h2>Page not found</h2>"; 
        }
    ); 
}
window.onload = () => {
    loadPage("Home");
}