import {component$, useStylesScoped$ } from "@builder.io/qwik";
import TechnologyStyle from "./technology.css?inline"




const technologies = [
    {title: "Lua", description: "Amazing scripting language",key: "lua"},
    {title: "QwikJS", description: "TypeScript library",key: "qwik"},
    {title: "Base CSS", description: "Big things comes in small sizes!",key:"css"},
    {title: "Git", description: "Version control",key:"git"},
    {title: "MongoDB", description: "Document type database",key:"mongodb"},
    {title: "MySQL", description: "SQL Database",key:"sql"},

]

export const Technology = component$(() => {
    useStylesScoped$(TechnologyStyle)

    return (
        <div class = "technologies">
            <div class = "technologies-title">Current technologies I use</div>
                <section>
                    {
                        technologies.map((data: any,index: number) => (
                            <div class = "technology">
                                <div class = "icon">
                                    <img src = {"/technologies/" + data.key + ".png"}></img>
                                </div>
                                <div class = "technology-about">
                                    <div class = "technology-title">{data.title}</div>
                                    <div class = "technology-desc">{data.description}</div>
                                </div>
                            </div>
                        ))
                    }
                </section>
        </div>
    )
});