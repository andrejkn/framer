import React, {  Component  } from 'react';
import styles from './frame.style';

export default class Frame extends Component {
  render() {
    const CLOSE_CHAR = '⨉';
    const MINIMIZE_CHAR = '—';
    const EXPAND_CHAR = '⤢';

    const {
      frame,
      focused,
      frameContent,
      buttonsPanel,
      buttonRed,
      buttonGreen,
      buttonOrange,
      centeredButtonContent,
      title
     } = styles;

    const { props } = this;
    const focStyle = (props.pane.get('isFocused')) ? focused : {};
    const visibilityStyle = (props.pane.get('status') === 'DOCKED') ? {
      display: 'none'
    } : {};
    const focFrame = Object.assign({}, frame, focStyle, visibilityStyle);

    return (
      <div style={ focFrame }>
        <div style={ buttonsPanel }>
        { /**
          <div style={ buttonRed }>
            <span style={ centeredButtonContent }>
              { CLOSE_CHAR }
            </span>
          </div>
        */ }
          <div
            style={ buttonOrange }
            onClick={ props.toggleFrameStatus }>
            <span style={ centeredButtonContent }>
              { MINIMIZE_CHAR }
            </span>
          </div>
        { /**
          <div style={ buttonGreen }>
            <span style={ centeredButtonContent }>
              { EXPAND_CHAR }
            </span>
          </div>
        */ }
          <div style={ title }>
            { props.pane.get('name') }
          </div>
        </div>
        <div style={ frameContent }>
          { props.children }
        </div>
      </div>
    );
   }
 }
