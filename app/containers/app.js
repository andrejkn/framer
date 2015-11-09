import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import {
  changeFramePosition,
  makeFrameFocused,
  toggleFrameStatus
} from '../actions/frames'
import Frame from '../components/frame';
import Movable from '../components/movable';
import Dock from '../components/dock';
import widgets from '../components/widgets';
import { getNewPosition } from '../utils/move-helpers';

class App extends Component {
  render() {

    const {
      props,
      _handleMove,
      _handleFocus,
      _handleToggleFrameStatus
    } = this;

    const frameElements = props.panes.map((pane, id) => {
      const isFocused = (props.panes.size === pane.get('focusLevel'));

      const movableContent = pane.get('isFramed') ? (
        <Frame
          key={ id }
          children={ widgets[id] }
          status={ pane.get('status') }
          toggleFrameStatus={ _handleToggleFrameStatus.bind(this, id) }
          pane={ pane.merge({isFocused: isFocused}) } />
      ) : (
        <Dock
          toggleFrameStatus={ _handleToggleFrameStatus }
          makeFocused={ _handleFocus }
          panes={ props.panes } />
      );

      return (
        <Movable
          handleMove={ _handleMove.bind(this, id, pane) }
          focusLevel={ pane.get('focusLevel') }
          isFocused={ isFocused }
          isMoving={ pane.get('isMoving') }
          x={ pane.get('x') }
          y={ pane.get('y') }
          makeFocused={ _handleFocus.bind(this, id) }>

          { movableContent }

        </Movable>
      );
    });

    return (
      <div>
        { frameElements }
      </div>
    );
  }

  _handleMove = (id, pane, event) => {
    const { dispatch } = this.props;
    const {
      type: eventType,
      clientX: currentX,
      clientY: currentY
    } = event;

    const focusLevel = pane.get('focusLevel');
    const frameX = pane.get('x');
    const frameY = pane.get('y');

    const dX = currentX - pane.get('prevX');
    const dY = currentY - pane.get('prevY');

    const newX = frameX + dX;
    const newY = frameY + dY;

    if(eventType === 'mousedown') {
      dispatch(changeFramePosition(id, frameX, frameY, true, focusLevel, currentX, currentY));
    } else if(eventType === 'mousemove' && pane.get('isMoving')) {
      dispatch(changeFramePosition(id, newX, newY, true, focusLevel, currentX, currentY));
    } else if((eventType === 'mouseup' || eventType === 'mouseleave') && pane.get('isMoving')) {
      dispatch(changeFramePosition(id, newX, newY, false, pane.get('focusLevel'), currentX, currentY));
    }
  }

  _handleFocus = (id) => {
    const { dispatch } = this.props;
    dispatch(makeFrameFocused(id));
  }

  _handleToggleFrameStatus = (id) => {
    const { dispatch } = this.props;
    dispatch(toggleFrameStatus(id));
  }
}

function select(state) {
  const { frames } = state;
  return {
    panes: frames.get('panes')
  }
}

export default connect(select)(App);
