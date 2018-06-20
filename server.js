'use strict';

const express = require('express');
const request = require('request');

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

const url = 'https://www.googleapis.com/books/v1/volumes?q=';
//const url = 'http://mountebank:4545/books/v1/volumes?q=';
// App
const app = express();
app.get('/books/:q', (req, res) => {
    request(url+req.params.q, { json: true }, (err, resp, body) => {
        if (err) {
            res.send( {
                success : false,
                'error' : err.message
            });
            return;
        }

        let returnValue = {
            success : true,
            'books' : []
        };

        if (!body || !body.items) {
            res.send( {
                success : false,
                'error' : 'no books'
            });
            return;
        }

        body.items.forEach(function(e) {
            returnValue.books.push(e.volumeInfo.title);
        })

        res.send(returnValue);
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);