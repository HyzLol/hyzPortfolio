import { component$, QRL, useStylesScoped$ } from "@builder.io/qwik";
import AppStyle from "./app.css?inline"
import appData from "~/constants";


type AppProps = {
    type: string,
    onOpen$: QRL<(type:any) => void>,
    onClose$: QRL<(type:any) => void>,
}



export const App = component$<AppProps>((props) => {
    const type = props.type 
    const key = type as keyof typeof appData
    if (!appData[key]) return 

    const data = appData[key]
    const icon = data.icon; const title = data.title;

    useStylesScoped$(AppStyle)
    return (
        <div class = "app" onClick$={() => {
            props.onOpen$(props.type)
        }}>
            <div class = "app-icon">
                <iconify-icon icon = {icon}></iconify-icon>
            </div>
            <span>{title}</span>
        </div>
    )
});