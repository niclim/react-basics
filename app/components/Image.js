import React, { Component } from 'react';
import Button from './Button';

// This usually goes in a separate file with all our api requests - for simplicity its here
const getRandomImage = () => fetch('https://randomuser.me/api/').then(res => res.json()).then(res => res.results[0]);

// Here we define a class based component - note how we import Component using object destructuring
// This is exactly the same as writing React.Component
// We use components if we want to store state (something that stores information about the current state of the component)
class Image extends Component {
    // The constructor is what is called when we instantiate a component
    // props are always passed through to the component
    // We initialize the state of the component in the constructor
    constructor(props) {
        super(props) // This is something we always need to call when we create a react component constructor
        this.state = {
            image: null
        }
    }

    // Function that is passed down to the button to retreive and display an image
    // Async
    displayImage() {
        // Updates the state once the promise (ajax call) is resolved
        getRandomImage().then(res => {
            this.setState(() => {
                return {
                    image: res.picture.large
                }
            })
        })
    }

    // Function that is passed down to clear the state
    clearImage() {
        this.setState(() => {
            return {
                image: null
            }
        })
    }

    render() {
        // Note how we can overwrite the button's default styling by passing our className... More information on this is in the Button component
        // Also note how we use "conditional rendering" to show different images based on the state
        // We don't show an image if we don't have anything set in the state
        return (
            <div style={{ textAlign: 'center' }}>
                <div>
                    {this.state.image ? <img src={this.state.image} /> : "Empty image!"}
                </div>
                <div>
                    <Button onClick={this.displayImage.bind(this)}>Get a random image!</Button>
                    <Button className="btn btn-danger" onClick={this.clearImage.bind(this)}>Clear Image!</Button>
                </div>
            </div>
        )
    }
}

export default Image;