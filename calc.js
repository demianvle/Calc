

document.addEventListener("click", function(e){
  e= window.event;
  e=e.target;
  let screen = document.getElementById("screen");

  switch (e.value) {
  case false:
    break;
  case undefined:
    break;
  case "=":
    if (undefined) {
      break;
    }
    else if (NaN) {
      break;
    }
    else
    screen.value= eval(screen.value);
    break;
  case "C":
    screen.value="";
    break;
  default:
    screen.value+=e.value;
}

});
