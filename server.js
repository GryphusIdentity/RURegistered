'use strict'

/**
 * Dependencies
 * @ignore
 */
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')

/**
 * Module Dependencies
 * @ignore
 */
const pkg = require('./package.json')
const cwd = process.cwd()
const OIDC = require('./OIDC')
const ldap = require('ldapjs');
/**
 * App
 * @ignore
 */
const app = express()

/**
 * Setup
 */
const oidc = new OIDC(require('./config.json'))

app.use(express.static('dist'))
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE'],
    preflightContinue: false
}))

app.use((req, res, next) => oidc.init(req, res, next))

/**
 * Login
 */
app.get('/login', function (req, res) {
    res.redirect(req.anvil.authorizationUri())
})

/**
 * Callback
 */
app.get('/login/callback', function (req, res) {
    //let { query: params, anvil } = req
    //if (params && params.code) {
//
    //    // Fetch and decode tokens
    //    anvil.token({ code: params.code }).then(token => {
    //        req.tokens = token
    //        return anvil.userInfo({ token: token.access_token })
//
    //    }).then(userinfo => {
    //        let { tokens } = req
    //        req.userinfo = userinfo
//
    //        return subs.subscribe({ userinfo, tokens })
    //            ? res.redirect('/#/?subscribed=true')
    //            : res.sendStatus(400)
//
    //    }).catch(err => {
    //        res.sendStatus(500)
    //    })
    //}
})

/**
 * Unsubscribe
 */
app.get('/api/v1/student', function (req, res) {
    console.log("Got request")
    if (req.query && req.query.id) {
        var client = ldap.createClient({
            url: 'ldap://ldap.ru.ac.za'
        });
        client.on('err', function(err) {
            console.log(err)
        })
        var opts = {
            filter: `(cn=${req.query.id})`,
            scope: 'sub'
        };
        client.search('ou=STUDENT,o=RU', opts , function (err, result) {

            let results = []
            result.on('searchEntry', function (entry) {
                results.push(entry.object)
                console.log('entry: ' + JSON.stringify(entry.object));
            });
            result.on('end', function (result) {
                console.log('status: ' + result.status);
                res.status(200).json(results)
            });
            result.on('error', function(error){
                console.log(`error: ${error}`)
                res.status(404).json(error) // DEBUG: remove .json for prod
            })

        });
    }

   
})

/**
 * Listen
 */
app.listen(process.env.PORT || 2456, () => {
    console.log(`Listening on port ${process.env.PORT || 2456}`)
})