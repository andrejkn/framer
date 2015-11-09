export const MOVE_FRAME = 'MOVE_FRAME';
export const MOVE_DOCK = 'MOVE_DOCK';
export const FOCUS_FRAME = 'FOCUS_FRAME';
export const TOGGLE_FRAME_STATUS = 'TOGGLE_FRAME_STATUS';

function makeActionCreator(type, ...argNames) {
  return function(...args) {
    let action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  }
}

export const changeFramePosition = makeActionCreator(MOVE_FRAME,
  'id', 'x', 'y', 'isMoving', 'focusLevel', 'prevX', 'prevY');

export const makeFrameFocused = makeActionCreator(FOCUS_FRAME, 'id');

export const toggleFrameStatus = makeActionCreator(TOGGLE_FRAME_STATUS, 'id');
