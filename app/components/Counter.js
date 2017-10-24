import React, { Component } from 'react';
import Button from './Button';
// Here we define a class based component - note how we import Component using object destructuring
// This is exactly the same as writing React.Component
// We use components if we want to store state (something that stores information about the current state of the component)
class Counter extends Component {
    // The constructor is what is called when we instantiate a component
    // props are always passed through to the component
    // We initialize the state of the component in the constructor
    constructor(props) {
        super(props) // This is something we always need to call when we create a react component constructor
        this.state = {
            value: 0
        }
    }

    // Here we define the function that is passed down to the button to add
    handleAdd() {
        this.setState(prevState => {
            return {
                value: prevState.value + 1
            }
        })
    }

    // Here we define the function that is passed down to the button to subtract
    handleSubtract() {
        this.setState(prevState => {
            return {
                value: prevState.value - 1
            }
        })
    }

    render() {
        // We can pass in objects as styling to react components
        const buttonContainerStyle = {
            textAlign: 'center'
        }

        // Note how we have to bind our methods to the current object - this is because we are passing the reference around and we need to explicitly set the context to this current object
        return (
            <div>
                <div>
                    Counter: {this.state.value}
                </div>
                <div style={buttonContainerStyle}> 
                    <Button onClick={this.handleAdd.bind(this)}>Add</Button>
                    <Button onClick={this.handleSubtract.bind(this)}>Subtract</Button>
                </div>
            </div>
        )
    }
}

export default Counter;