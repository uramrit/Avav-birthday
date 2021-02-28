function myFunction(x) {
    if (x.matches) { // If media query matches
        $(".birthday-clip").after("<a href='index.html'><button class='back2 btn btn-lg btn-outline-light'><i class='fas fa-arrow-circle-left'></i> BACK</button></a>")
    } else {
        $(".back2").remove();
    }
}

var x = window.matchMedia("(max-width: 991px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes\

