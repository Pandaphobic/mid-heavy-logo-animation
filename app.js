import anime from '/node_modules/animejs/lib/anime.es.js';


var elements = document.querySelectorAll('.dom-node-demo .el');

anime({
    targets: '.fuc',
    translateX: 0,
    translatey: -200,
    rotate: '1turn',
    duration: 80000
  });

// anime({
//     targets:'.svg .lines path',
//     strokeDashoffset: [anime.setDashoffset, 0],
//     easing: 'easeInOutSine',
//     duration: 1500,
//     delay: function(el, i) { return i * 250 },
//     direction: 'forwards',
// })