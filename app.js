const express = require('express');

const app = express();

// app.use('/Product',() => {
//     console.log("Route product")
// });

// app.use('/User',() => {
//     console.log("Route user")
// });

const router = express.Router();

router.get('/User',() => {
    console.log("Route getuser")
});

app.use(router);

module.exports = app;