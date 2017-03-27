'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'

/**
 * View
 */
class View extends React.Component {

  get style () {
    if (this._style) {
      return this._style
    }

    let { props: { layout, style } } = this
    let outputStyle

    if (layout === 'row') {
      outputStyle = {
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        flex: '100',
        maxHeight: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }
    } else if (layout === 'column') {
      outputStyle = {
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        flex: '100',
        maxWidth: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }
    } else {
      outputStyle = {
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        flex: '100',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }
    }

    if (style) {
      this._style = Object.assign(outputStyle, style)
    } else {
      this._style = outputStyle
    }

    return this._style
  }

  render () {
    let { style, props: { children } } = this

    return (
      <div style={style}>
        {children}
      </div>
    )
  }
}

/**
 * Export
 */
export default View