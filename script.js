function myKeyPress(e) {
  /* TODO: retrieve the value from the text input */
  var mytextbox = document.getElementById("textinput").value;

  // TODO: set the value of the textbox with the formatted value

  var keyPressed;
  if (window.event) {
    // IE
    keyPressed = e.keyCode;
  } else if (e.which) {
    // Netscape/Firefox/Opera
    keyPressed = e.which;
  }

  var x = String.fromCharCode(keyPressed);
  var y = formatPhoneNumber(mytextbox);

  console.log("Key Pressed = " + x);
  console.log("  Formatted = " + y);

  // TODO: Add a condition to ignore entries beyond 10 digits
  if (y.length > 11) {
    y = y.slice(0, 11);
  }
  document.getElementById("textinput").value = y;
}

function formatPhoneNumber(value) {
  /* TODO:  Use replace function to ignore extra - character */
  value = value.replace(/-/g, "");
  if (value.length >= 3 && value.length <= 6)
    value = value.slice(0, 3) + "-" + value.slice(3);
  else if (value.length > 6)
    value = value.slice(0, 3) + "-" + value.slice(3, 6) + "-" + value.slice(6);
  console.log(value);
  return value;
}
