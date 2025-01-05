const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({ origin: ['http://localhost:3000', 'https://www.pacificliftbd.com', 'https://pacific-lift.onrender.com'] }));
//route
const brochure = require('./route/brochure');



app.get('/', (req, res) => {
    return res.send('hello');
})


app.use('/brochure', brochure);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('public'));
}

app.use(express.static('public'));

app.listen('4000', (err) => {
    if (err) {
        throw new Error(err);
    }

    console.log('server is listening to 4000');
});

