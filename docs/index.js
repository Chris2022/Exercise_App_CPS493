let closed = true;
let display = true;
let demonstrate = true;
function show(){
    if(closed){
        document.getElementById("hidden-mobile").style.display= "block";
        closed = false;
    }
    else{
        document.getElementById("hidden-mobile").style.display="none";
        closed = true;
    }
}
function displayWorkout(){
    if(display){
        document.getElementById("hidden-mobile-workout").style.display= "block";
        display = false;
    }
    else{
        document.getElementById("hidden-mobile-workout").style.display="none";
        display = true;
    }
}
function showJournal(){
    if(demonstrate){
        document.getElementById("hidden-mobile-journal").style.display= "block";
        demonstrate = false;
    }
    else{
        document.getElementById("hidden-mobile-journal").style.display="none";
        demonstrate = true;
    }
}

function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("content-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " is-active";
  }