import React from 'react';
import { fromJS, List, Map } from 'immutable';
import {
  MOVE_FRAME,
  MOVE_DOCK,
  FOCUS_FRAME,
  TOGGLE_FRAME_STATUS,
} from '../actions/frames';

const UNDOCKED = 'UNDOCKED';
const DOCKED = 'DOCKED';

const initialState = Map({
  panes: fromJS({
    '001': {
      isFramed: false,
      x: 200,
      y: 500,
      isMoving: false,
      isFocused: false
    },
    '002': {
      isFramed: false,
      isFramed: true,
      name: 'Wikipedia',
      x: 10,
      y: 20,
      isMoving: false,
      isFocused: false,
      status: UNDOCKED
    },
    '003': {
      isFramed: true,
      name: 'Notes',
      x: 20,
      y: 30,
      isMoving: false,
      isFocused: false,
      status: UNDOCKED
    },
    '004': {
      isFramed: true,
      name: 'YouTube',
      x: 30,
      y: 40,
      isMoving: false,
      isFocused: false,
      status: UNDOCKED
    }
  })
});

export default function frames(state = initialState, action) {

  switch (action.type) {
    case FOCUS_FRAME:
      return (
        state.update('panes', (panes) =>
          panes.map((pane) =>
            (action.id === pane.get('id')) ? pane.set('isFocused', true) :
              pane.set('isFocused', false)
          )
        )
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
            .set('prevY', action.prevY)
        )
      );

    case TOGGLE_FRAME_STATUS:
      return state.update('panes', (panes) =>
        panes.update(action.id, (pane) =>
          pane
            .set('status', (pane.get('status') === DOCKED) ? UNDOCKED : DOCKED)
        )
      );

    default:
      return state;
  }
}
