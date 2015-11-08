import React, { Component } from 'react';
import { movableStyle } from './movable.style';

export default class Movable extends Component {

  render() {
    const {
      isFocused,
      x = 10,
      y = 10
    } = this.props;

    const positionedStyle = Object.assign({}, movableStyle, {
      top: y,
      left: x,
      zIndex: isFocused ? 999 : 1
    });

    return (
      <div style={ positionedStyle }
           onMouseDown={ this._handleMouseDown }
           onMouseMove={ this._handleMouseMove }
           onMouseUp={ this._handleMouseUp }
           onMouseLeave={ this._handleMouseLeave }>
        {this.props.children}
      </div>
    );
  }

  _handleMouseDown = (e) => {
    this.props.makeFocused();
    this.props.handleMove(e);
  }

  _handleMouseUp = (e) => {
    this.props.handleMove(e);
  }

  _handleMouseMove = (e) => {
    this.props.handleMove(e);
  }

  _handleMouseLeave = (e) => {
    this.props.handleMove(e);
  }
}
