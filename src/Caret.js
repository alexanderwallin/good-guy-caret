import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Direction } from 'src/constants.js'

/**
 * Returns an SVG path for a caret with the given properties
 *
 * @param  {Direction} direction  Which direction the caret should point
 * @param  {Number}    size       The size in pixels of the base part of the
 *                                caret
 * @param  {Number}    ratio      The ratio of the caret
 * @return {String}               An SVG path
 */
const getCaretPolygonPointsPath = (direction, size, ratio) => {
  const long = size
  const short = size / ratio

  if (direction === Direction.UP) {
    return `0 ${short} ${long / 2} 0 ${long} ${short}`
  } else if (direction === Direction.DOWN) {
    return `0 0 ${long / 2} ${short} ${long} 0`
  } else if (direction === Direction.LEFT) {
    return `0 ${long / 2} ${short} 0 ${short} ${long}`
  } else if (direction === Direction.RIGHT) {
    return `0 0 ${short} ${long / 2} 0 ${long}`
  }

  return null
}

/**
 * Good Guy Caret
 */
export default class Caret extends PureComponent {
  static propTypes = {
    direction: PropTypes.oneOf([
      Direction.UP,
      Direction.DOWN,
      Direction.LEFT,
      Direction.RIGHT,
    ]).isRequired,
    size: PropTypes.number,
    ratio: PropTypes.number,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    style: PropTypes.shape({}),
    shadow: PropTypes.string,
  }

  static defaultProps = {
    size: 16,
    ratio: 2,
    fill: null,
    stroke: null,
    style: {},
    shadow: null,
  }

  render() {
    const {
      direction,
      size,
      ratio,
      fill,
      stroke,
      shadow,
      style,
      ...props
    } = this.props

    const width =
      direction === Direction.UP || direction === Direction.DOWN
        ? size
        : size / ratio
    const height =
      direction === Direction.UP || direction === Direction.DOWN
        ? size / ratio
        : size

    const defaultStyles =
      shadow === null
        ? {}
        : {
            filter: `drop-shadow(${shadow})`,
          }

    return (
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        style={{ ...defaultStyles, ...style }}
        {...props}
      >
        <polygon
          points={getCaretPolygonPointsPath(direction, size, ratio)}
          fill={fill}
          stroke={stroke}
        />
      </svg>
    )
  }
}
