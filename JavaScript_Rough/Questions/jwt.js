//que 1 .what is jwt ?
//que 2. When should you use JSON Web Tokens?
//que 3. What is the JSON Web Token structure?
//que 4. pros And cons in jwt
//que 5. difference between encoded And encryption
//que 6. which one can provide security to data encoding or encryption 
//que 7. what is token?
//que 8.  what happen when after expired time incase user want to use jwt token ? 
    //ans : res => token expired
//que 9. how to token work on authentication and authorization?
//que 10 what is jwt and jws and jwe?

/*
jwt is external package of node js and it  most commonly used to identify an authenticated user. 

pros (advantage) 
Advantages
    1. JWT is a stateless authentication mechanism as 
        the user state is never saved in the database. ... (after jwt creation no need store in database )
    2. Protects against CSRF (Cross Site Request Forgery) attacks.
    3. JWT is compact. ...(small and easy to carry)
    4. You can authorize only the requests you wish to authorize. ...
    5. You can send JWT to any domain.

Disadvantages
    1. Not easy to revoke a JWT as it is a stateless authentication mechanism. 
        It makes difficult to implement feature like Sign out from all devices . ...
    2. Need to write some code to implement whereas cookies work out of the box.
    3. 

.
*/
/*   
    json web token

    defines a compact and self-contained way for 
    securely transmitting information between parties as a JSON object

    This information can be verified and trusted because it is digitally signed.

*/

//que 2. When should you use JSON Web Tokens?

/*
    Authorization: This is the most common scenario for using JWT. 
    Once the user is logged in, each subsequent request will include the JWT, 
    allowing the user to access routes, services, and resources that are 
    permitted with that token

    Information Exchange: JSON Web Tokens are a good way of securely 
    transmitting information between parties.

*/

//que3. What is the JSON Web Token structure?
/*

    it contain 3 part which separate by using (.)
    1. header
    2. payload
    3. Signature

    1. Header : 
        header gives the information about algorithum and  type of token

        {"alg": "HS256",
        "typ": "JWT"}
        
    2. Payload : The second part of the token is the payload, 
        which contains the claims. Claims are statements about an 
        entity (typically, the user) and additional data. 

        There are three types of claims: registered, public, and private claims.

        a. registered claim : These are a set of predefined claims which are not mandatory but recommended, 
            to provide a set of useful, interoperable claims. 
            Some of them are: iss (issuer), exp (expiration time), sub (subject), aud (audience)

        b. public claim : These can be defined at will by those using JWTs. 
            But to avoid collisions they should be defined in the IANA JSON 
            Web Token Registry or be defined as a URI that contains a collision resistant namespace.

        c. private claims: These are the custom claims created to share information between 
            parties that agree on using them and are neither registered or public claims.

            ex  : {
                "sub": "1234567890",
                "name": "John Doe",
                "admin": true
            }
    
    3.Signature :To create the signature part you have to take the encoded header, the encoded payload,
        a secret, the algorithm specified in the header, and sign that

        ex : HMACSHA256(
            base64UrlEncode(header) + "." +
            base64UrlEncode(payload),
            secret)
        
        The signature is used to verify the message wasn't changed along the way, and, 
        in the case of tokens signed with a private key, 
        it can also verify that the sender of the JWT is who it says it is.


    */
function solution(arr) { 
    //Write your solution here 
    let i= 0; let j = 0; 
    let ans = - Number.MAX_VALUE; 
    let curSum = 0; 
    while (j < arr.length){ 
        if(i == arr.length){ 
            j++; i = j 
        } else{ curSum += arr[i] } 
        if(i==j){ curSum = arr[i] } 
        ans = curSum > ans ? curSum : ans 
        // console.log(curSum) 
        i++ 
    }
    return ans 
}
let arr = [-20, -12, 42, -10, 25]
let res = solution(arr)
console.log(res);