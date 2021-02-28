function myFunction(x) {
    if (x.matches) { // If media query matches
        $("#head").after("<a href='clip.html'><button class='btn btn-outline-light btn-lg gift-btn'><i class='fas fa-gift'></i>  GIFT</button></a>")
    } else {
        $(".gift-btn").remove();
    }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes\

