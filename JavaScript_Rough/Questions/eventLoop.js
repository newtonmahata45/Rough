/* Event Loop*/

/**
 * JavaScript has a runtime model based on an event loop,which is responsible for executing the code,
 *  collecting and processing events, and executing queued sub-tasks.
 *  This model is quite different  from models in other languages like C and Java.
 */

//https://www.jsv9000.app/

function logA() { console.log('A') }
function logB() { console.log('B') }
function logC() { console.log('C') }
function logD() { console.log('D') }

// Click the "RUN" button to learn how this works!
logA();
setTimeout(logB, 0);
Promise.resolve().then(logC);
logD();

// NOTE:
//   This is an interactive vizualization. So try 
//   editing this code and see what happens. You
//   can also try playing with some of the examples 
//   from the dropdown!