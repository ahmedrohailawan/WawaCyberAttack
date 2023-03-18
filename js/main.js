window.onload = function(){ document.getElementById("loading").style.display = "none" }

// dark mode function
function setdarkmode() {
  var darkmodebtn = document.querySelector("#darkmodebtn");
  var root = document.documentElement;
  if (darkmodebtn.classList.contains('light_mode')) {
    darkmodebtn.classList.remove('light_mode');
    darkmodebtn.classList.add('dark_mode');
    darkmodebtn.textContent = "Light Mode";
    root.style.setProperty('--aqua', '#05e6ee');
    root.style.setProperty('--white', '#ffffff');
    root.style.setProperty('--black', '#111');
    root.style.setProperty('--black-body', '#050b17');
    root.style.setProperty('--black-web', '#0d1321');
    root.style.setProperty('--black-web-border', '#0d1321');
    root.style.setProperty('--black-covers', '#141724');
    localStorage.setItem('mode', 'dark'); // Store the user's preferred mode in localStorage
  } else {
    darkmodebtn.classList.remove('dark_mode');
    darkmodebtn.classList.add('light_mode');
    darkmodebtn.textContent = "Dark Mode";
    root.style.setProperty('--aqua', '#08c5cb');
    root.style.setProperty('--white', '#111');
    root.style.setProperty('--black', '#ffffff');
    root.style.setProperty('--black-body', 'hsl(var(--hue-color), 60%, 99%)');
    root.style.setProperty('--black-web', 'hsl(var(--hue-color), 60%, 99%)');
    root.style.setProperty('--black-web-border', 'rgb(223, 221, 221)');
    root.style.setProperty('--black-covers', 'hsl(var(--hue-color), 60%, 99%)');
    localStorage.setItem('mode', 'light'); 
  }
}

// text mode function
function setTextMode() {
  const imageModeBtn = document.querySelector('#imagemodebtn');
  const img = document.querySelectorAll('.img');
  const content = document.querySelectorAll('.content');
  const home_content = document.querySelectorAll('.home .content');
  const space = document.querySelectorAll('.space');

  if (imageModeBtn.classList.contains('image_mode')) {
    imageModeBtn.classList.remove('image_mode');
    imageModeBtn.classList.add('text_mode');
    imageModeBtn.textContent = "Image mode";
    img.forEach(i => i.style.display = 'none');
    content.forEach(c => c.style.width = '100%');
    space.forEach(s => s.style.display = 'none');
    home_content.forEach(hc => hc.style.paddingLeft = '0');
    localStorage.setItem('textModeEnabled', 'true');
  } else {
    imageModeBtn.classList.add('image_mode');
    imageModeBtn.classList.remove('text_mode');
    imageModeBtn.textContent = "Text mode";
    img.forEach(i => i.style.display = '');
    content.forEach(c => c.style.width = '');
    space.forEach(s => s.style.display = '');
    home_content.forEach(hc => hc.style.paddingLeft = '');
    localStorage.removeItem('textModeEnabled'); 
  }
}



// check for user preference on page reload 
window.addEventListener('load', function() {
  if (localStorage.getItem('mode') === 'dark') {
    setdarkmode();
  }
  if (localStorage.getItem('textModeEnabled') === 'true') {
    setTextMode();
  }
});
