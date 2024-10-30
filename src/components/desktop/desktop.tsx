import { $, component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import DesktopStyle from "./desktop.css?inline"
import { Taskbar } from "./taskbar/taskbar";
import { App } from "./app/app";


const apps = [
    "about",
    "experience",
    "projects",
    "contact",
    "terminal"
] 

export const Desktop = component$(() => {
    useStylesScoped$(DesktopStyle)

    const opened = useStore({apps: [] as any})
    
    const onOpen = $((type: any) => {
        if ((opened.apps).indexOf(type) > -1) return

        opened.apps.push(type)
    })
    const onClose = $((type: any) => {
        const index = opened.apps.indexOf(type)
        if (index > -1) {
            opened.apps.splice(index,1)
        }
    })

    return (
        <>
            <div id = "desktop-wrapper">
                {
                    apps.map((type,id) => (
                        <App type = {type} key = {id} onOpen$={onOpen} onClose$={onClose}></App>
                    ))
                }
            </div>
            <Taskbar apps = {opened.apps}></Taskbar>
        </>
    )
});