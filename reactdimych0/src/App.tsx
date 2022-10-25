import React from 'react';
import './App.css';
import Accordion1 from "./components/Accordion/Accoordion";
import {Rating, Star} from "./components/Rating/Rating";
import {Toys} from "./components/Accordion/Accoordion";


function hello() {
    alert('Hello IT-KAMASUTRA')
}
hello();

const App = () => {
    console.log("App rendering")
  return (
    <div>
        <PageTitle title={"This is App component"}/>
        <PageTitle title={"My friends"}/>
        <Star selected={true}/>
        Article 1
        <Rating value={3}/>
        <Accordion titleValue={"Menu"}/>
        Article 2
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
        <Accordion1 titleValue={"New Menu"} />
        <Toys titleVal={"New toys"} collapsed={true}/>
        <Toys titleVal={"New toys"} collapsed={false}/>

    </div>
  );
}

type PageTitlePropsType = {
    title: string
}

function  PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return(
        <h1>{props.title}</h1>
    )
}

type AccordionPropsType = {
    titleValue: string
}

function Accordion(props:AccordionPropsType) {
     console.log("Accordion rendering")
  return(
      <div>
        <h3>{props.titleValue}</h3>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
  )
 }



export default App;
