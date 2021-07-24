# Mid Heavy Timeline Animation

I decided to use the AnimeJS Timeline as it's easier
to set the order of events. It also waits for the event
to complete before firing the next.

The timeline wants {animation objects} for each event.
Because each event will have a different target, I used
a function for each type of object. (Front, Back, H)

Each of these functions works the same: it accepts the
target ID and then builds out an object with that ID.
Once the object is built, add() can then draw it.

You can think of each add() as:
`anime(animation-object)`

animation-object example:
`{ targets: backTarget, translateY: 212, translateX: -35, direction: "reverse", easing: "linear", duration: 110, }`

But instead of explicitly declaring each and every object,
we run a function to create that object imediately before
we need to use it.

## Result
![MH_POC](https://user-images.githubusercontent.com/11794877/126878329-61e0005d-1a18-47d2-81fd-fa2d963770bb.gif)

