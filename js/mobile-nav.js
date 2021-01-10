function toggleMenu () {
  var item = document.getElementById('links');
  item.classList.toggle('open');
  var nav = document.getElementById('nav');
  console.log(nav);
  nav.classList.toggle('open');
}

