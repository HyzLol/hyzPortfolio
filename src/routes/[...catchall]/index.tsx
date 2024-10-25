import { component$, useStylesScoped$ } from '@builder.io/qwik';
import ErrorCss from "./error.css?inline"

export default component$(() => {
    useStylesScoped$(ErrorCss)
    return (
        <div id = "container">
            <h1>This page does not exist</h1>
            <p>Please contact the developer if you think this is an error!</p>
        </div>
    );
});