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
      x: 28,
      y: 624,
      isMoving: false,
      focusLevel: 1
    },
    '002': {
      isFramed: false,
      isFramed: true,
      name: 'Wikipedia',
      x: 10,
      y: 20,
      isMoving: false,
      focusLevel: 2,
      status: DOCKED
    },
    '003': {
      isFramed: true,
      name: 'Notes',
      x: 668,
      y: 4,
      isMoving: false,
      focusLevel: 3,
      status: UNDOCKED
    },
    '004': {
      isFramed: true,
      name: 'YouTube',
      x: 30,
      y: 40,
      isMoving: false,
      focusLevel: 4,
      status: DOCKED
    },
    '005': {
      isFramed: true,
      name: 'GitHub - the repo of this project!',
      x: 668,
      y: 514,
      isMoving: false,
      focusLevel: 5,
      status: UNDOCKED
    },
    '006': {
      isFramed: true,
      name: 'Blog',
      x: 3,
      y: 4,
      isMoving: false,
      focusLevel: 6,
      status: UNDOCKED
    }

  })
});

export default function frames(state = initialState, action) {

  switch (action.type) {
    case FOCUS_FRAME:
      return state.update('panes', (panes) => {
        const selectedFocusLevel = panes.get(action.id).get('focusLevel');

        return panes.map((pane, key) => {
          const currentFocusLevel = pane.get('focusLevel');
          const newFocusLevel = (currentFocusLevel < selectedFocusLevel) ?
            currentFocusLevel : currentFocusLevel - 1;
          return (action.id === key) ? pane.set('focusLevel', panes.size) :
            pane.set('focusLevel', newFocusLevel);
        })
      });

    case MOVE_FRAME:
      return state.update('panes', (panes) =>
        panes.update(action.id, (pane) =>
          pane
            .set('x', action.x)
            .set('y', action.y)
            .set('isMoving', action.isMoving)
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
