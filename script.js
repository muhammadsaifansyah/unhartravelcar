// Toggle class active
const navbarNav = document.querySelector ('.navbar-Nav');
// ketika di klik 
document.querySelector('#hamburger-menu'). onclick = () => {
  navbarNav.classList.toggle('active');
};


// klik diluar sidebar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
 if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
  navbarNav.classList.remove('active');
 }
});

// perkalian //
function add(){
var a,b,c; 
a=Number(170000);
b=Number(document.getElementById("second").value); 
c = a * b; 
document.getElementById("answer").value= c;

}
