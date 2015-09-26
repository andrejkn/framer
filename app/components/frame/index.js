import React, { Component } from 'react';
import Movable from '../movable';
import styles from './frame.style';

export default class Frame extends Component {
  render() {
    const CLOSE_CHAR = '⨉';
    const MINIMIZE_CHAR = '—';
    const EXPAND_CHAR = '⤢';

    const {
      frame,
      frameContent,
      buttonsPanel,
      buttonRed,
      buttonGreen,
      buttonOrange,
      centeredButtonContent
    } = styles;

    return (
      <div style={frame}>
        <div style={buttonsPanel}>
          <div style={buttonRed}>
            <span style={centeredButtonContent}>
              {CLOSE_CHAR}
            </span>
          </div>
          <div style={buttonOrange}>
            <span style={centeredButtonContent}>
              {MINIMIZE_CHAR}
            </span>
          </div>
          <div style={buttonGreen}>
            <span style={centeredButtonContent}>
              {EXPAND_CHAR}
            </span>
          </div>
        </div>
        <div style={frameContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
