console.log('Hello world!');


const myName = 'Meow';
const h1 = document.querySelector('.heading-primary');
console.log(h1);



/*h1.addEventListener('click', function() {
  h1.textContent = myName;
h1.style.backgroundColor = 'red';
h1.style.padding = '5rem';
});
*/


/*SET CURRENT YEAR*/
const yearEL =document.querySelector('.year');
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEL.textContent = currentYear;



/*MAKE MOBILE NAV WORK*/
const btnNavEL =document.querySelector('.btn-mobile-nav');
const headerEL =document.querySelector('.header');

btnNavEL.addEventListener('click', function() {
  headerEL.classList.toggle('nav-open');
});


/*SMOOTH SCROLLING ANIMATION*/

const allLinks = document.querySelectorAll('a:link');
console.log(allLinks);

/* e => event*/
allLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
console.log(e);
e.preventDefault();
const  href = link.getAttribute('href');
console.log(href);

//SCROLL BACK TOP*/
if (href === '#')
window.scrollTo({
  top: 0,
  behavior: 'smooth',
})


/*SCROLL TO OTHER LINKS*/
if (href !== '#' && href.startsWith('#'))
{
  const sectionEL = document.querySelector(href);
  console.log(sectionEL);
  sectionEL.scrollIntoView({ behavior: 'smooth' });
}


/*CLOSE MOBILE NAV*/
if (link.classList.contains('main-nav-link')) {
  headerEL.classList.toggle('nav-open');
}
  })
})


/**ADD STICKY NAV AFTER HERO SECTION**/

const sectionHeroEL =document.querySelector('.section-hero');

const obs = new IntersectionObserver(function(entries){
const ent =entries[0];
console.log(ent);
if (ent.isIntersecting === false) {
  document.body.classList.add('sticky');
}

if (ent.isIntersecting) {
  document.body.classList.remove('sticky');
}

},
 {
  // In viewport
  root:null,
  threshold: 0,
  rootMargin: '-80px',

});
obs.observe(sectionHeroEL);

















///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

/* Ensure smooth scrolling in Safari polyfill*/
// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*



*/
