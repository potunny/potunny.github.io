const testbutton = document.querySelector('.js-button');

function testfunc() {
  if (testbutton.classList.contains('js-button')){
    console.log(testbutton); //first I was printing the string 'js-button' and then I remembered the concept of printing the element itself by consoling the variable that stores the selected element
  }
  else{
    console.log('no');
  }
}