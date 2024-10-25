import { component$, useStylesScoped$ } from "@builder.io/qwik";
import DesktopStyle from "./desktop.css?inline"
import { Taskbar } from "./taskbar/taskbar";

export const Desktop = component$(() => {
    useStylesScoped$(DesktopStyle)
    return (
        <>
            <div id = "desktop-wrapper">
                {/* <App type = "about"></App>
                <App type = "experience"></App>
                <App type = "projects"></App>
                <App type = "resume"></App>
                <App type = "contact"></App> */}
            </div>
            <Taskbar/>
        </>
        
    )
});