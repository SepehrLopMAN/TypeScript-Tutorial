let clickVar: "click";
clickVar = "click"; // valid
// clickVar = 'dblclick'; // compiler Error : Type '"dblclick"' is not assignable to type '"click"'.

type MouseEvents = "click" | "dblclick" | "mouseup" | "mousedown";
let mouseEvent: MouseEvents;
mouseEvent = "click"; // valid
mouseEvent = "dblclick"; // valid
mouseEvent = "mouseup"; // valid
mouseEvent = "mousedown"; // valid
// mouseEvent = "mouseover"; // compiler error
