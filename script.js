// Global Scope:  variable declared here is accessible from anywhere in this file.
let globalMessage = "I am a variable in the global scope. You can access me from any function.";

// Function to calculate and return a value (Part 2)
/**
 * A function that calculates a new position based on an input value.
 * @param {number} startPosition - The starting position (e.g., 10).
 * @param {number} multiplier - A value to multiply the start position by.
 * @returns {number} The new, calculated position.
 */
function calculateNewPosition(startPosition, multiplier) {
    let localResult = startPosition * multiplier;
    console.log("From inside calculateNewPosition(): The local result is", localResult);
    return localResult;
}

// Another function to demonstrate scope (Part 2)
function useGlobalVariable() {
    console.log("From inside useGlobalVariable(): I can access a global variable:", globalMessage);
}

// Calling the functions to demonstrate their outputs in the console
console.log("Part 2: JavaScript Function Demonstrations");


// Calling the function with parameters and storing the return value
let finalPosition = calculateNewPosition(7, 12);
console.log("The value returned from calculateNewPosition() is:", finalPosition);

// Calling the function that uses the global variable
useGlobalVariable();


function triggerAnimation(elementToAnimate, animationClass) {
    // Here we use the classList API to add the class
    elementToAnimate.classList.add(animationClass);

    // After a delay, we remove the class so the animation can be triggered again.
   
    setTimeout(() => {
        elementToAnimate.classList.remove(animationClass);
    }, 1000); 
}

// Get the DOM elements we need to interact with
const triggerButton = document.getElementById('triggerButton');
const animationBox = document.getElementById('animationBox');

// Add an event listener to the button (Part 3)
triggerButton.addEventListener('click', () => {
    // Call our reusable function to trigger the animation on the box
    triggerAnimation(animationBox, 'is-active');
});
