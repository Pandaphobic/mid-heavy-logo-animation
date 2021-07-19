import anime from '/node_modules/animejs/lib/anime.es.js';


var elements = document.querySelectorAll('.dom-node-demo .el');

anime({
    targets: '.fuc',
    translateX: 0,
    translatey: -200,
    rotate: '1turn',
    duration: 80000
});

var backPath1;
var backPath2;
var backPath3;
var backPath4;
var backPath;

// window.onload = function (){
//   var c = document.getElementById("mhlogo").contentDocument;
//   backPath1 = c.getElementById("backPath1");
//   backPath2 = c.getElementById("backPath2");
//   backPath3 = c.getElementById("backPath3");
//   backPath4 = c.getElementById("backPath4");
//   backPath = c.querySelectorAll("backPath");
//   console.log(backPath)
//     anime({
//       targets: backPath1,
//       translateY: 250,
//       translateX: -35,
//       direction: 'reverse',
//       easing: 'easeInOutSine',
//       duration: 2000,
//       delay: 1000,
//     });
//     anime({
//       targets: backPath2,
//       translateY: 250,
//       translateX: -35,
//       direction: 'reverse',
//       easing: 'easeInOutSine',
//       duration: 2000,
//       delay: 4000,
//     });
//     anime({
//       targets: backPath3,
//       translateY: 250,
//       translateX: -35,
//       direction: 'reverse',
//       easing: 'easeInOutSine',
//       duration: 2000,
//       delay: 6000,
//     });
//     anime({
//       targets: backPath4,
//       translateY: 250,
//       translateX: -35,
//       direction: 'reverse',
//       easing: 'easeInOutSine',
//       duration: 2000,
//       delay: 8000,
//     });
// }
window.onload = function (){
anime({
  targets: '.backPath',
  translateY: 250,
  translateX: -37,
  direction: 'reverse',
  easing: 'easeInOutSine',
  duration: 1000,
  delay: anime.stagger(2000, {direction: 'reverse'})
  
});

anime({
  targets: '.frontPath',
  translateY: -250,
  translateX: -37,
  direction: 'reverse',
  easing: 'easeInOutSine',
  duration: 1000,
  delay: anime.stagger(2000, {direction: 'reverse'}),
});

anime({
  targets: '.hPath',
  translateX: -4000,
  direction: 'reverse',
  easing: 'easeInOutSine',
  duration: 1000,
  delay: 8000,
});
}
//hey hon, figure out a way to itterate this so that you dont have to write it out a bunch of times for each element.
//use animejs staggering for moving all the things, might wanna pull the animejs func out of the onload?
//gotta give all your svg paths ids to target them by.
