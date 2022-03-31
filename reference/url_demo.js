const url = require('url');

const myURL = new URL('http://mywebsite.com:8080/hello.html?id=100&status=active');

// get serialized URL
console.log(myURL.href);
console.log(myURL.toString());

// get host (root domain)
console.log(myURL.host);

// get hostname (does not get port)
console.log(myURL.hostname);

// pathname
console.log(myURL.pathname);

//serialized query
console.log(myURL.search);

// params object
console.log(myURL.searchParams);

// add aparm
myURL.searchParams.append('abc', '123');
console.log(myURL.searchParams);

// loop through params
myURL.searchParams.forEach((value, name) => {
    console.log(`${name}: ${value}`);
});