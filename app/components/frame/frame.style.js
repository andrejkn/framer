const RED = '#F54731';
const ORANGE = '#F5B031';
const GREEN = '#31F556';
const FRAME_COLOR = {
  focused: 'rgba(138, 178, 179, 1)',
  unfocused: 'rgba(138, 178, 179, 0.8)'
};
const TITLE_COLOR = '#FFFFFF';
const TITLE_SIZE = 20;
const TITLE_SHADOW_COLOR = '#333333';

const topWidth = 40;
const marginSpace = 10;
const buttonSize = topWidth - 2 * marginSpace;
const buttonContentSize = buttonSize - marginSpace;
const aboveContentSpace = marginSpace / 2;
const frameBorder = buttonSize / 2;

const roundButton = {
  cursor: 'pointer',
  fontSize: buttonContentSize,
  borderRadius: '50%',
  border: '0 none',
  width: buttonSize,
  height: buttonSize,
  display: 'inline-block',
  margin: marginSpace,
  verticalAlign: 'middle'
};

const centeredButtonContent = {
  lineHeight: buttonSize + 'px',
  verticalAlign: 'middle',
  textAlign: 'center',
  display: 'block'
};

export default {
  frame: {
    boxShadow: '-1px 1px 5px 0px rgba(0,0,0,0.5)',
    borderStyle: 'solid',
    borderRadius: `${frameBorder}px ${frameBorder}px 0 0`,
    borderTopWidth: topWidth,
    borderColor: FRAME_COLOR.unfocused,
    cursor: 'move',
    minWidth: 150,
    minHeight: 200,
    msUserSelect: 'none',
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',
    userSelect: 'none'
  },

  focused: {
    borderColor: FRAME_COLOR.focused,
  },

  buttonOrange: Object.assign({}, roundButton, {
    backgroundColor: ORANGE
  }),

  buttonRed: Object.assign({}, roundButton, {
    backgroundColor: RED
  }),

  buttonGreen: Object.assign({}, roundButton, {
    backgroundColor: GREEN
  }),

  centeredButtonContent: centeredButtonContent,

  buttonsPanel: {
    marginTop: -topWidth
  },

  frameContent: {
    cursor: 'default'
  },

  title: {
    color: TITLE_COLOR,
    fontSize: TITLE_SIZE,
    display: 'inline-block',
    lineHeight: 0,
    verticalAlign: 'middle',
    fontFamily: 'Arial',
    textShadow: `1px 1px ${TITLE_SHADOW_COLOR}`
  }
}
