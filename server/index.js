const express = require('express');
const path = require('path');
require('dotenv').config();

const usersController = require('./controllers/users');
const postsController = require('./controllers/posts');
const FAQController = require('./controllers/FAQ');
const ReviewController = require('./controllers/reviews');
const WorkoutController = require('./controllers/workout');
const ContactController = require('./controllers/Contact');
const AccountController = require('./controllers/account');
const EditController = require('./controllers/edit');
const FoodController = require('./controllers/Food');
const foodsController = require('./controllers/foods');

const app = express()
const port = process.env.PORT || 3000;

app
    .use('/', express.static(path.join(__dirname, '../docs')) )

    /*
        Access-Control-Allow-Origin: https://foo.example
        Access-Control-Allow-Methods: POST, GET, OPTIONS
        Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
    */

    .use( (req, res, next) =>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        next();
    } )

    .use(express.json())
    .use('/users', usersController )
    .use('/posts', postsController)
    .use('/FAQ', FAQController)
    .use('/reviews', ReviewController)
    .use('/reports', WorkoutController)
    .use('/contact', ContactController)
    .use('/account', AccountController )
    .use('/edit', EditController)
    .use('/foods', FoodController)
    .use('/foo', foodsController)

app
    .get('*', (req, res) => res.sendFile(path.join(__dirname, '../docs/index.html')) )

app
    .use((err, req, res, next)=>{
        // Besides for sending the error to the client. It is helpful to write it to the terminal/console.
        // More information can be serialized to the console than can be serialized to JSON for transfer over the wire.
        // Eventually you may want to add logic to prevent sensitive information from being sent to the client and to reformat the error message to make it more user friendly
        console.error(err);
        res.status(err.code || 500).send(err);
    })

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})