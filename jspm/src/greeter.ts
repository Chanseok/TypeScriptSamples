import repeat from "core-js/library/fn/string/repeat"

export class Greeter
{
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor (element: HTMLElement)
    {
        this.element = element;
        this.element.innerText += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start()
    {
        this.timerToken = setInterval(() => this.span.innerText =  `"${repeat(new Date().toUTCString() + " ", 2)}"`, 500);
    }

    stop()
    {
        clearTimeout(this.timerToken);
    }
}
