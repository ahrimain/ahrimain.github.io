var prevscroll = window.scrollY;
window.onscroll = function() {
    var curscroll = window.scrollY;
    if (prevscroll > curscroll) {
        document.getElementById("topnav").style.top = "0";
    } else {
        document.getElementById("topnav").style.top = "-75px";
    }
    prevscroll = curscroll
}