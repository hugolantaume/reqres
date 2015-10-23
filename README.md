ReqRes
======

ReqRes is a bare-bones ExpressJS application.

[Docs & Demos ⇒](http://reqres.in)

## Installation

* Clone repo
* Make sure Node.js is installed on your machine
* `npm install`
* Make sure you have Gulp installed globally (only needed for asset compilation)
* `node app.js` or use [Nodemon](https://github.com/remy/nodemon)
* Run `gulp` if you're modifying the Sass

## Tour

* [app.js](https://github.com/benhowdle89/reqres/blob/master/app.js) - this is where we create the Express app and define all of our routes
* [index.js](https://github.com/benhowdle89/reqres/blob/master/routes/index.js) - this is the main file for the callback routes
* [config.json](https://github.com/benhowdle89/reqres/blob/master/config.json) - this houses the pagination details & fake session token
* [data.json](https://github.com/benhowdle89/reqres/blob/master/data.json) - this holds the fake data. This is where you would add a new key to the array and then you could define a callback route for it in `routes/index.js`
