import React, { Component } from 'react';

// Here we define a class based component - note how we import Component using object destructuring
// This is exactly the same as writing React.Component
// We use components if we want to store state (something that stores information about the current state of the component)
class Clock extends Component {
    // The constructor is what is called when we instantiate a component
    // props are always passed through to the component
    // We initialize the state of the component in the constructor
    constructor(props) {
        super(props) // This is something we always need to call when we create a react component constructor
        this.state = {
            currentTime: new Date()
        }
    }

    // One of React's life cycle methods
    // componentDidMount means that we have rendered the component to the DOM
    componentDidMount() {
        // Set up an interval to increment the clock internal state
        // The interval reference is set to a property so we can remove it if we want to remove the component
        this.interval = window.setInterval(() => {
            // We call setState to update the state later on
            this.setState(() => {
                return { currentTime: new Date() }
            }) 
        }, 1000);
    }

    // This happens right before the component is going to be removed from the dom
    componentWillUnmount() {
        // When we remove the component we want to clear the interval used to (as the component is no longer on the page)
        window.clearInterval(this.interval);
    }

    renderClock() {
        const dateString = this.state.currentTime.toLocaleTimeString()
        return <span>{dateString}</span>
    }

    // The render method is called everytime the component needs to rerender
    // The returned value is the html that is displayed to the screen
    render() {
        return (
            <div>
                <p>The current time is: {this.renderClock()}</p>
            </div>
        )
    }
}

// Export the class component to be reference it later
export default Clock;