// Here we need to import React in all the files we declare a component
import React from 'react';
import { render } from 'react-dom'; // We use object destructuring here extract the render method from react-dom

// import our components here
import Clock from './components/Clock';
import Box from './components/Box';
import Counter from './components/Counter';
import Image from './components/Image';

// We are defining a function that creates a react component
// These are called stateless functional components because they have no state inside of them
const App = () => {
    // Whatever we return from this function will be a component
    // What we declare in here is JSX - which is a way to create react components that look like html
    // We must only return a single root element for each component (e.g. a single div, or single p tag, etc)
    // If we want to pass in javascript variables we use {} to evaluate the javascript
    // classes are added via className - this app we just use bootstrap
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Clock />
                </div>
                <div className="col-6">
                    <Counter />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <Box />
                </div>
                <div className="col-6">
                    <Image />
                </div>
            </div>
        </div>
    )
}

// This is where we connect our application to the actual HTML document
render(<App /> , document.getElementById('app'));