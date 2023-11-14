let currentDisplay = '' ;
document.querySelector('#input_display').value = currentDisplay;
function randomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    document.documentElement.style.setProperty('--start-color', randomColor());
    document.documentElement.style.setProperty('--middle-color', randomColor());
    document.documentElement.style.setProperty('--end-color', randomColor());
