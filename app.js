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

window.onload = function (){
  var c = document.getElementById("mhlogo").contentDocument;
  backPath1 = c.getElementById("backPath1");
    anime({
      targets: backPath1,
      translateY: 250,
      translateX: -35,
      direction: 'reverse',
      easing: 'easeInOutSine',
      duration: 3000
    });
}

//hey hon, figure out a way to itterate this so that you dont have to write it out a bunch of times for each element.
//use animejs staggering for moving all the things, might wanna pull the animejs func out of the onload?
//gotta give all your svg paths ids to target them by.
