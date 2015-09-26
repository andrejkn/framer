export function getNewPosition(blob) {
  const {
    eventType,
    currentX,
    currentY,
    initX,
    initY,
    prevX,
    prevY,
    isMoving
  } = blob;

  //console.log(eventType);
  //console.log(`x=${currentX} y=${currentY}`);

  let dX = currentX - prevX;
  let dY = currentY - prevY;

  //console.log(`dx=${dX} dy=${dY}`);

  if(eventType === 'mousedown') {
    return {
      x: initX,
      y: initY,
      isMoving: true
    };
  } else if(eventType === 'mousemove') {
    console.log(`dx=${dX} dy=${dY}`);
    if(isMoving) {
      return {
        x: initX + dX,
        y: initY + dY,
        isMoving: isMoving
      };
    } else {
      return {
        x: initX,
        y: initY,
        isMoving: isMoving
      }
    }
  } else if(eventType === 'mouseup' || eventType === 'mouseleave') {
    return {
      x: initX + dX,
      y: initY + dY,
      isMoving: false
    };
  }
}
