import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <h1>1. How does React Work?</h1>
            <p>React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it is necessary to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most effective way to update the browser’s DOM. Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation. Although React was produced to be used in the browser, because of its design it can also be used in the server with Node.js. </p>
            <h1>2. What are the differences between props vs state?</h1>
            <p>1.  Props, make components reusable by giving components the ability to receive data from their parent component in the form of props where State, on the other hand is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. 2. Props are read-only, on the contrary State changes can be asynchronous. 3. Props are immutable but	State is mutable. 4. Props allow you to pass data from one component to other components as an argument where State holds information about the components. 5. Props can be accessed by the child component but State cannot be accessed by child components. 6. Props are used to communicate between components where States can be used for rendering dynamic changes with the component. 7. Stateless component can have Props, on the contrary	Stateless components cannot have State. 8. Props make components reusable, however State cannot make components reusable. 9.Props are external and controlled by whatever renders the component but the State is internal and controlled by the React Component itself.
            </p>
            <h1>3. How does useState works?</h1>
            <p>useState is a Hook that allows us to have state variables in functional components. It allows to declare one or more state variables in function components. One can pass the initial state to a function. Then it returns a variable with the current state value (not necessarily the initial state) and another function to update this value. Under the hood, React keeps track of these state variables and makes sure that they stay up-to-date on subsequent re-renders of the component.</p>
        </div>
    );
};

export default Footer;