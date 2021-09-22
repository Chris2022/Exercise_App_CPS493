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