const express = require('express');
const app = express()
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRoutes = require('./api/routes/products');
// const orderRoutes = require('./api/routes/orders');
// collection routes
const orderRoutes = require('./api/routes/collections');

// connection with mongodb atlas
// mongoose.connect('mongodb+srv://admin:mongoadmin@cluster101-xos6w.mongodb.net/test?retryWrites=true&w=majority', 
// { useNewUrlParser: true })
mongoose.connect('mongodb://localhost:27017/daraz', { useNewUrlParser: true })

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/daraz_products', productRoutes);
app.use('/daraz_collections', orderRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);

});

app.use((error, req, res, next) => {

    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});
module.exports = app;