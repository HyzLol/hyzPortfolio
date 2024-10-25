import { component$, useStylesScoped$ } from "@builder.io/qwik";
import TaskbarStyle from "./taskbar.css?inline"

export const Taskbar = component$(() => {
    useStylesScoped$(TaskbarStyle)
    return (
        <div id = "taskbar">
            <div id = "icon">
                <iconify-icon icon="mingcute:windows-fill"></iconify-icon>
            </div>
            <div id = "rightData">
                <iconify-icon icon="iconamoon:arrow-up-2"></iconify-icon>
                <iconify-icon icon="mdi:ethernet"></iconify-icon>
                <iconify-icon icon="subway:sound"></iconify-icon>
                <div id = "date">
                    <div id = "clock">2:23 AM</div>
                    <div id = "data">10/26/2024</div>
                </div>
            </div>
        </div>
    )
});