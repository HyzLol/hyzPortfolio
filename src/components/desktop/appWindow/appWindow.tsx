import { $, component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import AppWindowStyle from "./appWindow.css?inline"
import appData from "~/constants";

interface Element {
    pos1: number;
    pos2: number;
    pos3: number;
    pos4: number;
    element: HTMLElement | null;
}
export const AppWindow = component$((props) => {
    useStylesScoped$(AppWindowStyle)
    const position = useStore<Element>({
        pos1: 0,
        pos2: 0,
        pos3: 0,
        pos4: 0,
        element: null
    })

    const closeDragElement = $(() => {
        document.onmouseup = null 
        document.onmousemove = null 
    })

    const elementDrag = $((e: any) => {
        e.preventDefault();
        position.pos1 = position.pos3 - e.clientX;
        position.pos2 = position.pos4 - e.clientY;
        position.pos3 = e.clientX;
        position.pos4 = e.clientY;

        const elmnt = position.element
        if (elmnt == null) return 

        elmnt.style.top = (elmnt.offsetTop - position.pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - position.pos1) + "px"; 
    })

    return (
        <div class = "app-window" draggable onMouseMove$={(e) => {
            // if (!e.target.classList.contains("app-window")) return 
            const target = e.target as HTMLElement

            console.log(e.target.classList)
            const rect = target.getBoundingClientRect(), x = e.clientX - rect.left, y = e.clientY - rect.top    
            
            target.style.setProperty("--mouse-x", `${x}px`)
            target.style.setProperty("--mouse-y", `${y}px`)
        }} onMouseDown$={(e) => {
            e.preventDefault();
            if (!e.target.classList.contains("app-window")) {
                const el = e.target.parentElement
                if (!el.classList.contains("app-window")) return 

                position.element = el as HTMLElement
            } else {
                position.element = e.target as HTMLElement
            }

            
            position.pos3 = e.clientX;
            position.pos4 = e.clientY;

            document.onmouseup = closeDragElement;

            document.onmousemove = elementDrag;
        }}>
            <header class = "app-window-header">
                <div class = "app-window-icon">
                    <iconify-icon icon = "mdi:about"></iconify-icon>
                </div>
                <div class = "app-window-title">About me</div>

                <div class = "app-window-accs">
                    <div class = "app-window-close">X</div>
                </div>
            </header>
        </div>
    )
});