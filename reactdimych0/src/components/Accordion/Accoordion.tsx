import React from "react";

type Accordion1PropsType = {
    titleValue: string
}

function Accordion1(props:Accordion1PropsType) {
    console.log("Accordion1 rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    )
}
type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h4>{props.title}</h4>
    )
}

function AccordionBody() {
    console.log("AccordionBody")
    return (
        <ul>
            <li>Number 1</li>
            <li>Number 2</li>
            <li>Number 3</li>
        </ul>

    )
}
type ToysPropsType = {
    titleVal: string
    collapsed: boolean
}

export function Toys(props:ToysPropsType) {
    if (props.collapsed === true) {
        return (
            <div>
                <ToysTitle title={props.titleVal}/>
                <ToysBody/>
            </div>
        )
    }
    else {
        return(
            <ToysTitle title={props.titleVal}/>
        )
    }
}
type ToysTitlePropsType = {
    title: string
}

function ToysTitle(props:ToysTitlePropsType) {
    return(
        <h5>{props.title}</h5>
    )
}
function ToysBody() {
    return(
        <ul>
            <li>Kittens</li>
            <li>Puppies</li>
            <li>Piglets</li>
        </ul>
    )
}

export default Accordion1;
