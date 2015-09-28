import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import { changeFramePosition, makeFrameFocused } from '../actions/frames'
import Frame from '../components/frame';
import Movable from '../components/movable'
import { getNewPosition } from '../utils/move-helpers';

class App extends Component {
  render() {

    const { panes } = this.props;
    const frameElements = panes.map((pane, index) => {
      return (
        <Movable
          handleMove={ this._handleMove.bind(this, index, pane)}
          isFocused={pane.get('isFocused')}
          isMoving={pane.get('isMoving')}
          x={pane.get('x')}
          y={pane.get('y')}
          makeFocused={this._handleFocus.bind(this, index)}>

          <Frame children={pane.get('content')} />

        </Movable>
      );
    });

    return (
      <div>
        {frameElements}
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

    const frameX = pane.get('x');
    const frameY = pane.get('y');

    const dX = currentX - pane.get('prevX');
    const dY = currentY - pane.get('prevY');

    const newX = frameX + dX;
    const newY = frameY + dY;

    if(eventType === 'mousedown') {
      dispatch(changeFramePosition(id, frameX, frameY, true, true, currentX, currentY));
    } else if(eventType === 'mousemove' && pane.get('isMoving')) {
      dispatch(changeFramePosition(id, newX, newY, true, true, currentX, currentY));
    } else if((eventType === 'mouseup' || eventType === 'mouseleave') && pane.get('isMoving')) {
      dispatch(changeFramePosition(id, newX, newY, false, pane.get('isFocused'), currentX, currentY));
    }
  }

  _handleFocus = (id) => {
    const { dispatch } = this.props;
    dispatch(makeFrameFocused(id));
  }
}

function select(state) {
  const { frames } = state;
  return {
    panes: frames.get('panes')
  }
}

export default connect(select)(App);
