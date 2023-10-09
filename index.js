const express = require('express');
const app = express()
const path = require('path');
const http = require('http');
const PORT = 5000

class App {
    constructor(){
        this.serverSetup()
        this.routeSetup()
    }
    
    serverSetup(){
        const server =  http.createServer(app)

        server.listen(PORT , () => {
            console.log('listening on port' , PORT)
        })

        app.use(express.static('public'));

    }

    routeSetup(){
        app.get('/' , (req , res , next) => {
            console.log('hello from server')
            var options = {
                root: __dirname,
                dotfiles: 'deny',
                headers: {
                  'x-timestamp': Date.now(),
                  'x-sent': true
                }
              }
    
            const fileName = 'index.html';
    
            res.sendFile(fileName , options , (err) => {
                if (err) {
                    console.log(err)
                    next(err)
                } 
                console.log('Sent:', fileName);
            })
    
        })


        app.get('/.well-known/acme-challenge/' , (req , res , next) => {
            console.log('hello from server')
            var options = {
                root: __dirname,
                dotfiles: 'deny',
                headers: {
                  'x-timestamp': Date.now(),
                  'x-sent': true
                }
              }
    
            const fileName = 'E9qO3css_sq4FPHKFuqzzY1Zeg46BHI0TZ_9w9fn-oo';
    
            res.sendFile(fileName , options , (err) => {
                if (err) {
                    console.log(err)
                    next(err)
                } 
                console.log('Sent:', fileName);
            })
    
        })

    }
}









new App();