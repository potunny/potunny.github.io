/* darkmode first method no localstorage
var moon = document.getElementById("moon");

moon.onclick = function(){
    document.body.classList.toggle("darkmode");
}
darkmode first method */

/*darkmode 2*/
function darkmode2(){
    var SetTheme = document.body;

    SetTheme.classList.toggle("dark-mode");

    var theme;
    
    if(SetTheme.classList.contains("dark-mode")){
        console.log("Dark mode");
        theme = "DARK";
    }
    else{
        console.log("Light mode");
        theme = "LIGHT";
    }

    //savelocalstorage down
    localStorage.setItem("PageTheme", JSON.stringify(theme));
}

let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
console.log(GetTheme);

if(GetTheme === "DARK"){
    document.body.classList = "dark-mode";
}
/*darkmode 2*/



//show left bar div
let div = document.getElementById('leftbar');
let display = 0;
let body = document.body; //squeezethingy
let cat = document.getElementById('catimage'); //cat

function showleftbar(){
    console.log(div.style.display) // altered, everytime you press the button it'll show in the console the state of div
    // the idea here is to understand what changed in this div.style.display when you pressed the button, it appear the state
    // in the console.
    if (display == 1){
        div.style.display = 'flex';
        cat.style.display = 'flex';
        body.style.paddingLeft = '250px';//squeezethingy
        display = 0;
    }
    else{
        div.style.display = 'none';
        display = 1;
        body.style.paddingLeft = '0px';//squeezethingy
        cat.style.display = 'none';
    }
}
//show left bar div
