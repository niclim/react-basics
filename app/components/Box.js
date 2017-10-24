import React, { Component } from 'react';
import Button from './Button';

// Here we define a class based component - note how we import Component using object destructuring
// This is exactly the same as writing React.Component
// We use components if we want to store state (something that stores information about the current state of the component)
class Box extends Component {
    // The constructor is what is called when we instantiate a component
    // props are always passed through to the component
    // We initialize the state of the component in the constructor
    constructor(props) {
        super(props); // This is something we always need to call when we create a react component constructor
        // We have a boolean for the state that stores whether the component is blue or red
        this.state = {
            isBlue: false
        }
    }

    // We create this method and pass this down to the button
    // This is because we want to update the state of THIS component
    // The button "doesn't know" about this component as it is a child and is isolated - all it does is calls the function we pass to it
    handleClick() {
        // The previous state gets passed into the callback in setState
        // We can use this to alternate between true and false
        this.setState(prevState => {
            return {
                isBlue: !prevState.isBlue
            }
        });
    }
    
    render() {
        const style = {
            width: '100%', height: '200px',
            textAlign: 'center',
            padding: '10px',
            backgroundColor: this.state.isBlue ? 'blue' : 'red'
        }
        return (
            <div style={style}>
                <p>Box!</p>
                <Button onClick={this.handleClick.bind(this)}>Click me to change the color!</Button>
            </div>
        )
    }
}

export default Box;