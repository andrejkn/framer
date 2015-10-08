import React from 'react';
import { fromJS, List, Map } from 'immutable';
import {
  MOVE_FRAME,
  MOVE_DOCK,
  FOCUS_FRAME
} from '../actions/frames';

const initialState = Map({
  panes: List.of(
    Map({
      isFramed: false,
      x: 200,
      y: 500,
      isMoving: false,
      isFocused: false
    }),
    Map({
      isFramed: true,
      x: 10,
      y: 20,
      isMoving: false,
      isFocused: false,
      content: (
        <iframe width="550"
          height="350"
          src="http://www.wikipedia.org">
        </iframe>
      )
    }),
    Map({
      isFramed: true,
      x: 20,
      y: 30,
      isMoving: false,
      isFocused: false,
      content: <textarea rows='20' cols='30' />
    }),
    Map({
      isFramed: true,
      x: 30,
      y: 40,
      isMoving: false,
      isFocused: false,
      content: (
        <iframe width="560"
          height="315"
          src="https://www.youtube.com/embed/5BCZSpyO6q0"
          frameborder="0">
        </iframe>
      )
    })
  )
});

export default function frames(state = initialState, action) {

  switch (action.type) {
    case FOCUS_FRAME:
      return (
        state.update('panes', (panes) =>
          panes.map((pane, index) =>
            (action.id === index) ? pane.set('isFocused', true) :
              pane.set('isFocused', false)))
      );

    case MOVE_FRAME:
      return state.update('panes', (panes) =>
        panes.update(action.id, (pane) =>
          pane
            .set('x', action.x)
            .set('y', action.y)
            .set('isMoving', action.isMoving)
            .set('isFocused', action.isFocused)
            .set('prevX', action.prevX)
            .set('prevY', action.prevY))
      );

    default:
      return state;
  }
}
