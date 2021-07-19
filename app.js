import anime from '/node_modules/animejs/lib/anime.es.js';


var elements = document.querySelectorAll('.dom-node-demo .el');

anime({
    targets: '.fuc',
    translateX: 0,
    translatey: -200,
    rotate: '1turn',
    duration: 80000
});

var backPath1

window.onload = function (){
  var c = document.getElementById("mhlogo").contentDocument;
  var backPath1 = c.getElementById("backPath1");
  backPath1.setAttribute("style", "fill: green;");
  // var c2 = document.getElementById("svg2").contentDocument;
  // var rect = c2.getElementById("backPath1");
  // rect.setAttribute("style", "fill: green;");
}

// anime({
//     targets:'.svg .lines path',
//     strokeDashoffset: [anime.setDashoffset, 0],
//     easing: 'easeInOutSine',
//     duration: 1500,
//     delay: function(el, i) { return i * 250 },
//     direction: 'forwards',
// })