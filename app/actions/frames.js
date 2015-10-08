export const MOVE_FRAME = 'MOVE_FRAME';
export const MOVE_DOCK = 'MOVE_DOCK';
export const FOCUS_FRAME = 'FOCUS_FRAME';

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
  'id', 'x', 'y', 'isMoving', 'isFocused', 'prevX', 'prevY');

export const makeFrameFocused = makeActionCreator(FOCUS_FRAME, 'id');
