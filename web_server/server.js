
'use strict';

//Change it to your desired port, note that 80 requires root permission
import path from 'path';
import express from 'express';
import open from 'open'; 

const app  = express(), 
      port = 3000; 

app.use('/', express.static(path.join(__dirname, './')));

console.log('Webserver started, waiting for incoming connections...');

// Start webserver
app.listen(port);

// Open the browser
open('http://localhost:'+port);
