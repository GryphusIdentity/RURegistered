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
const ldap = require('ldapjs');

/**
 * Module Dependencies
 * @ignore
 */
const pkg = require('./package.json')
const cwd = process.cwd()
const OIDC = require('./OIDC')

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
  // Handle OIDC auth callback
})

/**
 * Unsubscribe
 */
app.get('/api/v1/student', function (req, res) {
console.log("Got request")
if (req.query && req.query.id) {
  // Set up LDAP client
  var client = ldap.createClient({
      url: 'ldap://ldap.ru.ac.za'
  });
  // On connection error
  client.on('err', function (err) {
      console.log(err)
  })
  // Set up LDAP options (filter, scope)
  var opts = {
      filter: `(cn=${req.query.id})`,
      scope: 'sub'
  };
  // Search for student number
  client.search('ou=STUDENT,o=RU', opts, function (err, result) {
      let results = []
        // Callback for each result
      result.on('searchEntry', function (entry) {
        results.push(entry.object)
        console.log('entry: ' + JSON.stringify(entry.object));
      });
        // Callback for the end of the results
      result.on('end', function (result) {
        console.log('status: ' + result.status);
        res.status(200).json(results)
        client.unbind(); //  Close the connection
      });
      result.on('error', function (error) {
        console.log(`error: ${error}`)
        res.status(404).json(error) // DEBUG: remove .json for prod
        client.unbind(); // Close the connection
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
