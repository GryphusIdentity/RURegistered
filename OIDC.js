'use strict'

/**
 * Dependencies
 * @ignore
 */
const AnvilConnect = require('anvil-connect-nodejs')

/**
 * Constants
 * @ignore
 */
const updateTime = 3600000 // hourly

/**
 * OIDC
 */
class OIDC {

  constructor (options) {
    this.options = options
    this.anvil = new AnvilConnect(options)
  }

  get () {
    let now = Date.now()

    if (this.lastUpdate && now - updateTime < this.lastUpdate) {
      return Promise.resolve(this.anvil)

    } else {
      console.log(`${now} (Re)initializing OIDC metadata`)
      this.lastUpdate = now

      return this.anvil.initProvider().then(() => this.anvil)
    }
  }

  /**
   * Helper middleware
   */
  init (req, res, next) {
    return this.get()
      .then(anvil => {
        req.anvil = anvil
        next()
      })
  }

}

/**
 * Export
 */
module.exports = OIDC