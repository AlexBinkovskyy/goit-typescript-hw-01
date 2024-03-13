import { concatenation } from "./concatenation.js";
const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
    button.addEventListener("click", () => {
        concatenation(input.value, "hello!");
    });
}
function handleEvent(event, handler) { }
handleEvent("click", () => { console.log("Clicked!"); });
handleEvent("mouseover", (x, y) => { console.log(`Mouse at ${x}, ${y}`); });
//# sourceMappingURL=index.js.map