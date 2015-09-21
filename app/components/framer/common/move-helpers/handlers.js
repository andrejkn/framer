export function getNewPosition(event, initX, initY, prevX, prevY, isMoving) {
  let {type: eventType, clientX, clientY} = event;

  console.log(eventType);
  console.log(`x=${clientX} y=${clientY}`);

  let dX = clientX - prevX;
  let dY = clientY - prevY;

  console.log(`dx=${dX} dy=${dY}`);

  if(eventType === 'mousedown') {
    return {
      x: initX,
      y: initY,
      prevX: clientX,
      prevY: clientY,
      isMoving: true
    };
  } else if(eventType === 'mousemove') {
    if(isMoving) {
      return {
        x: initX + dX,
        y: initY + dY,
        prevX: clientX,
        prevY: clientY,
        isMoving: isMoving
      };
    } else {
      return {
        x: initX,
        y: initY,
        prevX: clientX,
        prevY: clientY,
        isMoving: isMoving
      }
    }
  } else if(eventType === 'mouseup' || eventType === 'mouseleave') {
    return {
      x: initX + dX,
      y: initY + dY,
      prevX: null,
      prevY: null,
      isMoving: false
    };
  }
}
