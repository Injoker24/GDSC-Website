
function renderList(json) {
    let itemCopy = document.getElementsByClassName("mySlides")[0].cloneNode(true);
    let tempHTML = "";
    json.forEach(movie => {
        itemCopy.getElementsByClassName("title")[0].innerHTML = movie.title
        itemCopy.getElementsByClassName("thumbnail")[0].src = movie.image
        itemCopy.getElementsByClassName("desc")[0].innerHTML = movie.desc
    });
}

fetch("movies.json")
.then(response => response.json())
.then(data => {
    renderList(data)
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }    
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function openNav(){
    document.getElementById("side").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("side").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
