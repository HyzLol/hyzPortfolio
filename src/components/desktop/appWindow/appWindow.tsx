import { $, component$, QRL,useStore, useStylesScoped$ } from "@builder.io/qwik";
import AppWindowStyle from "./appWindow.css?inline"
import appData from "~/constants";
import { Technology } from "./about/technology";

interface Element {
    pos1: number;
    pos2: number;
    pos3: number;
    pos4: number;
    element: HTMLElement | null;
}

type AppWindowProps = {
    type: string,
    onClose$: QRL<(type:any) => void>,
}

const appSections = {
    "about": (
        <div class = "about-wrapper">
            <div class = "about-title">Hello! My name is Filip Grigore!</div>
            <div class = "about-desc">Location: Romania</div>
            <div class = "about-desc">Software Engineer</div>
            <Technology/>
        </div>
        
    )
}



export const AppWindow = component$<AppWindowProps>((props) => {
    useStylesScoped$(AppWindowStyle)
    const position = useStore<Element>({
        pos1: 0,
        pos2: 0,
        pos3: 0,
        pos4: 0,
        element: null
    })

    const hasParent = $((el:any) => {
        let bool = false 
        let element = null;
        
        for (var parents = []; el; el = el.parentElement) {
            if (el.classList.contains("app-window")) {
                bool = true 
                element = el 
                break 
            }
        }
      
        return [bool,element];
      });

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


    const type = props.type 
    const key = type as keyof typeof appData
    if (!appData[key]) return 

    const data = appData[key]
    const icon = data.icon; const title = data.title;
    const section = appSections[type as keyof typeof appSections]

    return (
        <div class = "app-window" draggable onMouseMove$={async (e) => {
            var target = e.target as HTMLElement
            if (!target.classList.contains("app-window")) {
                const [has, element] = await hasParent(target)

                if (!has) return 
                target = element as HTMLElement
            }
            if (target == null) return 

            const rect = target.getBoundingClientRect(), x = e.clientX - rect.left, y = e.clientY - rect.top    
            
            target.style.setProperty("--mouse-x", `${x}px`)
            target.style.setProperty("--mouse-y", `${y}px`)
        }} onMouseDown$={async (e) => {
            e.preventDefault();
            const target = e.target as HTMLElement
            if (!target.classList.contains("app-window")) {
                const [has, element] = await hasParent(target)

                if (!has) return 
                const el = element as HTMLElement
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
                    <iconify-icon icon = {icon}></iconify-icon>
                </div>
                <div class = "app-window-title">{title}</div>

                <div class = "app-window-accs">
                    <div class = "app-window-close" onClick$={async (e) => {
                        var [has,target] = await hasParent(e.target as HTMLElement)
                        if (!has) return 

                        target = target as HTMLElement
                        target.classList.add("onHide")
                        setTimeout(() => {
                            props.onClose$(type)
                        },350)
                    }}>X</div>
                </div>
            </header>
            <section>
                {section}
            </section>
        </div>
    )
});