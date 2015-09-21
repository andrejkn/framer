import React from 'react';
import { movableStyle } from './movable.style';
import assign from 'object-assign';
import { getNewPosition } from '../common/move-helpers/handlers'

export default class Movable extends React.Component {
  /**
   * initialX
   * initialY
   * isClicked
   * isMoving
   */
  state = {
    prevX: null,
    prevY: null,
    isMoving: false
  }

  render() {
    let {
      isFocused,
      x = 10,
      y = 10
    } = this.props;

    let positionedStyle = assign({}, movableStyle, {
      top: y,
      left: x,
      zIndex: isFocused ? 999 : 1
    });

    return (
      <div style={positionedStyle}
           onMouseDown={this.handleMouseDown.bind(this, x, y)}
           onMouseMove={this.changePosition.bind(this, x, y)}
           onMouseUp={this.changePosition.bind(this, x, y)}
           onMouseLeave={this.changePosition.bind(this, x, y)}>
        {this.props.children}
      </div>
    );
  }

  handleMouseDown(x, y, e) {
    this.props.makeFocused();
    this.changePosition(x, y, e);
  }

  changePosition(initX, initY, e) {
    let {
      x, y,
      prevX,
      prevY,
      isMoving
    } = getNewPosition(e, initX, initY, this.state.prevX, this.state.prevY, this.state.isMoving);

    this.setState({
      prevX: prevX,
      prevY: prevY,
      isMoving: isMoving
    });

    if(isMoving) {
      this.props.handleMove(x, y);
    }
  }
}

