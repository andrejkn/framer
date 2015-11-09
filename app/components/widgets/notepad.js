import React from 'react';

const notepadWidget = () => {
  const defaultTxt = 'This web-app is developed in ' +
    'ReactJS and Redux as a result of me experimenting with ' +
    'these two amazing libraries. ' +
    '\n\nMy goals of this experiment was to:' +
    '\n\n  1. Build a dynamic personal website, and ' +
    '\n\n  2. Deliver a desktop-like user experience. ' +
    '\n\nWhy\u2753you might ask.\nWell because it was ' +
    'possible to be made with React and it looks cool😎';

  const styles = {
    fontSize: 19,
    color: '#444',
    fontFamily: 'Arial'
  };

  return (
    <textarea
      style={ styles }
      rows='20'
      cols='33'>{ defaultTxt }</textarea>
  );
};

export default notepadWidget;
