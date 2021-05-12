// selectors //
let stars = document.getElementById('stars');
let stars2 = document.getElementById('stars2');
let moon = document.getElementById('moon');
let rock = document.getElementById('rock');
let masjid = document.getElementById('masjid');
let text = document.getElementById('text');


// functions //
window.addEventListener('scroll',function(){
let value = window.scrollY;
stars.style.bottom = value * 0.05 + '%';
moon.style.bottom = value * -0.5 + 'px';
rock.style.bottom = value * -0.75 + 'px';
masjid.style.bottom = value * -0.15 + 'px';
text.style.right = -100 + value * 0.5 + '%';
text.style.top = 40 + value * 0.1 + '%';


})