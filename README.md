##### What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
**getElementById**: Using this method, an element  with a specific ID is found on a webpage. The method always returns only one element.
**getElementsByClassName**: Using the method, all elements on the webpage that use the same class name are found together. Many elements are found together, so they are returned as an HTMLCollection.
**querySelector**: using this method, it selects HTML elements using CSS selectors. It returns only the first matching elements. 
**querySelectorAll**: It also uses CSS selectors to select HTML elements. It returns all matching elements.
### How do you create and insert a new element into the DOM?
1/ Create  element 
2/ Select parent element 
3/ Insert  parent -element 
4/ make  Position 
5/ Replace element replace 
6/ Add HTML যোগ 
7/Done 
### What is Event Bubbling and how does it work?
**Event Bubbling**: It is a method of propagating events upward in the DOM.
When an event occurs on a child element, it starts at itself and gradually rises to the parent.
### What is Event Delegation in JavaScript? Why is it useful?
**Event Delegation**: It is the process of placing a listener on a parent element, so that the parent handles the events of the child element through event bubbling.
This eliminates the need for a separate listener for the new element, uses less memory, keeps the code simple, and improves performance.
### What is the difference between preventDefault() and stopPropagation() methods?
**preventDefault()**: It_ is used to prevent page reloads or link redirects.

**stopPropagation()**: It prevents the event from running, but the browser defaults to it.
