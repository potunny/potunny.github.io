// switch can be used instead of if else


// let can be reasigned and can be any value(numberstringetc), and const can't be changed


//map and filter
function toUpper(string) {
    return string.toUpperCase();
  }
  
  const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
  
  const upperCats = cats.map(toUpper);
  
  console.log(upperCats);
  // [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
  
  function lCat(cat) {
    return cat.startsWith("L");
  }
  
  const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
  
  const filtered = cats.filter(lCat);
  
  console.log(filtered);
  // [ "Leopard", "Lion" ]

  //map and filter
