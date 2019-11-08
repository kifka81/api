import http from 'http';
import app from './app.js';
// import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();


http.createServer(app)/*{
    key: fs.readFileSync( './config/server.key'),
    cert: fs.readFileSync( './config/server.cert')
}, app*/
      .listen(process.env.PORT, _=> {
        console.log(`App connectada al port ${process.env.PORT}! Anar a  https://localhost:${process.env.PORT}/`) });
    