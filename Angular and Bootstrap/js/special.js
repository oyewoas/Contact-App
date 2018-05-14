// window.onscroll = function() { myFunction() };

// var myNavbar = document.getElementById("bar");

// var sticky = myNavbar.offsetTop;

// function myFunction() {
//     if (window.pageXOffset >= sticky) {

//         bar.classList.add("sticky")
//     } else {

//         bar.classList.remove("sticky");
//     }
// }

// var modal = document.getElementById('myModal');

// var img = document.getElementById('imgmodal');

// var modalImg = document.getElementById("modalimg");

// var captionText = document.getElementById("modalcaption");

// img.onclick = function() {
//     modal.style.display = "block";
//     modalImg.src = this.src;

//     captionText.innerHTML = this.alt;
// }

// var span = document.getElementsByClassName("close")[0];

// span.onclick = function() {
//     modal.style.display = "none";
// }

function ff() {
    alert("Thank you very much, We will get back to you soon!");
}

// windows.onscroll = function() { myFunction() };

// var navbar = document.getElementsByClassName("nava");

// var sticky = navbar.offsetTop;

// function myFunction() {
//     if (window, pageYOffset >= sticky) {
//         navbar.classList.add("#sticky")
//     } else { navbar.classList.remove("#sticky"); }
// }

function openMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(function() {
    $('.marquee').marquee({
        duration: 15000,
        duplicate: true
    });
});


// Dropdown
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {

//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }