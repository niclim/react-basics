import React from 'react';

// This button does not need state (i.e. we don't need to track information of the button)
// Therefore we can make this a stateless functional component - a function that returns JSX (a react component)
// We make this more reusable by passing in a function onClick that will allow the button to be used with other components
const Button = props => {
    const { children } = props;
    const buttonStyle = {
        margin: '10px'
    };

    // We use the object spread syntax to be able to apply any extra props we pass in to be passed into the button child
    // Note that if we passed in a className parameter to the button, the passed value would overwrite the default class names of btn btn-primary
    // This is determined by the order that it is shown in the JSX
    return (
        <button style={buttonStyle} className="btn btn-primary" { ...props }>
            {children}
        </button>
    )
}

export default Button;