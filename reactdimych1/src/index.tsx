import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <div>Hello</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let a = {
    name: "Dimych",
    age: 18,
    address: {
        city: "Minsk",
        country: "Belarus"
    }
};

let users = [
    {
        name: "Dimych",
        age: 18,
        address: {
            city: "Minsk",
            country: "Belarus"
        }
    },
    {
        name: "Victor",
        age: 20,
        address: {
            city: "Minsk",
            country: "Belarus"
        }
    }
]
console.log(users[0].address.country);

let b = true;
b = "yo";
b = 10;
b = true;
console.log(b)

let c: Array<number>;
c = [1,2,3,4,5];
c = [];
c = [true,false]
c = [2,4,5,5,65,55,65];
c = [1,2,3,'yo']
c = ['hello', 'yo']












