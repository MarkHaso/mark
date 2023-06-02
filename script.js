let menu = document.querySelector ("#menu-icon");
let navbar = document.querySelector (" .navbar");

menu. addEventListener("click", function () {
navbar.classList. toggle("active");
});
 window. onscroll = () => {
navbar. classList.remove ("active")
};
/* koden det möjligt att interagera med navigeringsfältet genom att klicka på menyikonen. 
Klicket visar eller döljer navigeringsfältet genom att ändra dess CSS-klass. 
Dessutom görs navigeringsfältet automatiskt dolt när användaren skrollar på webbsidan.*/