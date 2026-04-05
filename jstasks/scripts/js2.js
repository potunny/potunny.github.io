const tglbtns = document.querySelectorAll('.togglebtn'); // Select all buttons with the 'togglebtn' class

tglbtns.forEach(btn => {
  btn.addEventListener('click', (a) => {
    const el = a.currentTarget;
    el.classList.toggle('is-active');
    el.setAttribute(el.classList.contains('is-active'));
  });
});

const tglbtns2 = document.querySelectorAll('.togglebtn2'); // Select all buttons with the 'togglebtn2' class and create variable

for (let i = 0; i < tglbtns2.length; i++) { // make a loop to go through all buttons
  tglbtns2[i].addEventListener('click', function() { // add click event listener to each button
    // First, remove 'is-active' class from all buttons
    for (let j = 0; j < tglbtns2.length; j++) { // when one button is clicked 
      tglbtns2[j].classList.remove('is-active'); // remove 'is-active' class from all buttons
    }
    // Then, add 'is-active' class to the clicked button
    this.classList.add('is-active'); // add 'is-active' class to the clicked button
  });
}

/*  a good solution I found on a blog post

document.querySelector('.selectedButton').addEventListener('click', function() {
    // Remove any existing active classes from all buttons
    document.querySelectorAll('.active').forEach(function(button) {
        button.classList.remove('active');
    });
    
    // Add the active class to the clicked button
    this.classList.add('active');
});

*/

/* call solution
function makeExclusive(togglebtn2, buttonSelector, activeClass = 'active') {
  const thediv = document.querySelector('.togglebtn2div');

  thediv.addEventListener('click', function (event) {
    const clicked = event.target.closest(buttonSelector);
    if (!clicked || !container.contains(clicked)) return;

    container.querySelectorAll(buttonSelector).forEach(btn =>
      btn.classList.remove(activeClass)
    );

    clicked.classList.add(activeClass);
  });
}
*/

const shipEl = document.querySelector('#shipresultp');
const inputEl = document.querySelector('#orderinput');
const errorEl = document.querySelector('#errorship');

let errorswitch = 'switchon';

function calculateshipping(){
  const makenumber = Number(inputEl.value);
  if (makenumber < 40 && makenumber > 0){
    shipEl.innerHTML = `<strong>Total: $</strong>${makenumber + 10}`;
  }
  else if (makenumber >= 40){
    shipEl.innerHTML = 'Free shipping!';
  }
  else {
    shipEl.innerHTML = '';
  }
}

function toggleerror(){
  const makenumber = Number(inputEl.value);
  if (makenumber < 0) {
    errorEl.innerHTML = `Sorry, negative values are not accepted.`;
    errorEl.classList.remove('fade-in', 'slide-in');
    if (errorswitch === 'switchon') {
      errorEl.classList.add('fade-in');
      errorswitch = 'switchoff';
    } else {
      errorEl.classList.add('slide-in');
      errorswitch = 'switchon';
    }
  }
  else {
    errorEl.innerHTML = ``;
    errorEl.classList.remove('fade-in', 'slide-in');
  }
}

function enterkey(event){ //event to detect key press and talk to html input
  if (event.key === "Enter"){
    calculateshipping();
    toggleerror();
  }
}