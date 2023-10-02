/*
Point of Middleware

1.Middleware functions usually have 3 standard params req, res, and next. 
    The first two are objects, the last is a function that will call the next 
    middleware function, if there is one.

2.Usually there is a middleware chain, meaning a chain of functions that 
    are called one after the other, with the last function sending the response
    back to the browser. So we get the request from the browser, make any modifications 
    and data additions, and then send a response back.
3.You must call next() (unless it’s the last function in the chain) or 
    the request will just hang and eventually timeout. 
4 .In the browser this will manifest as a really long spinner before a message 
    of “connection timed out” or similar.
5 .Any changes you make to req or res will be available in the next middleware function.
6 .req and res are unique for each request. Meaning that a user from USA 
    result in a different req object than a user from a European country.
*/

/*
What is Middleware?
Meaning of Middleware
Middleware Architecture Working
Types of Middleware
*/