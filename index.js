const express = require('express');
const app = express();
const cors = require('cors');
const cronjob = require('./utilities/utilities').cronJob;
const brochure = require('./route/brochure');
const contactQuery = require('./route/contactQuery');
const quote = require('./route/quote');
const productQuery = require('./route/productQuery');

app.use(express.json());
app.use(cors({ origin: ['http://localhost:3000', 'https://www.pacificliftbd.com', 'https://pacific-lift.onrender.com'] }));
app.use(express.static('public'));


//route
app.use('/brochure', brochure);
app.use('/contact-query', contactQuery);
app.use('/get-a-quote', quote);
app.use('/product-query', productQuery);


// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('public'));
// }

app.listen('4000', (err) => {
    if (err) {
        throw new Error(err);
    }
    cronjob();
    console.log('server is listening to 4000');
});

