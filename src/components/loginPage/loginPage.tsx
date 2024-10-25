import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import LoginStyle from "./loginPage.css?inline"

export const LoginPage = component$(() => {
    useStylesScoped$(LoginStyle)
    const nav = useNavigate();
    return (
        <div id = "loginPage">
            <div id = "icon">
                <iconify-icon icon="typcn:user"></iconify-icon>
            </div>
            <div id = "name">Hyz</div>
            
            <button  onClick$={() => nav('/desktop')} >Login</button>
        </div>
    )
});