import { concatenation } from "./concatenation";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
    button.addEventListener("click", () => {
        concatenation(input.value, "hello!");
    });
}
function handleEvent(event: string, handler: (params: any[]) => void): void {  }
handleEvent("click", () => { console.log("Clicked!") }); handleEvent("mouseover", (x: number, y: number) => { console.log(`Mouse at ${x}, ${y}`); });