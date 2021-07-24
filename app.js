/*       --- Mid Heavy Timeline Animation ---       */
var basicTimeline = anime.timeline();
basicTimeline.reverse();

function title() {
  document.getElementById("title").style.display = "block";
}

function H() {
  // Make the line visible
  document.getElementById("hPath").style.display = "block";
  return {
    targets: "#hPath",
    translateX: 100,
    direction: "reverse",
    easing: "easeInOutExpo",
    duration: 150,
    delay: 100,
    complete: title,
  };
}

function Back(backTarget) {
  return {
    targets: backTarget,
    translateY: 212,
    translateX: -35,
    direction: "reverse",
    easing: "linear",
    duration: 110,
  };
}

function Front(frontTarget) {
  return {
    targets: frontTarget,
    translateY: -212,
    translateX: -35,
    direction: "reverse",
    easing: "linear",
    duration: 110,
  };
}

// This runs from the bottom up
basicTimeline
  // **End Here**
  .add(Front(`#frontPath5`))
  .add(Back(`#backPath5`))
  .add(H())

  .add(Front(`#frontPath4`))
  .add(Back(`#backPath4`))

  .add(Front(`#frontPath3`))
  .add(Back(`#backPath3`))

  .add(Front(`#frontPath2`))
  .add(Back(`#backPath2`))

  .add(Front(`#frontPath1`))
  .add(Back(`#backPath1`));
// **Start Here**
