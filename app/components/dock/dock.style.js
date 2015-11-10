export default {
  dock: {
    minWidth: 400,
    padding: 5,
    borderRadius: 5,
    borderTop: 'solid rgba(138, 178, 179, 0.69) 10px',
    backgroundColor: 'rgba(116, 100, 100, 0.69)',
    cursor: 'move'
  },

  dockItems: {
    float: 'left',
    width: '100%',
    padding: 0,
    margin: 0,
    listStyleType: 'none'
  },

  undockedItem: {
    backgroundColor: '#F3F0F0',
    fontFamily: 'Arial',
    borderRadius: 2,
    color: 'rgb(187, 174, 174)',
    minHeight: 20,
    lineHeight: 2,
    display: 'inline-block',
    margin: 2,
    padding: '0 10px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#ddd'
    }
  },

  focusedItem: {
    backgroundColor: 'rgb(219, 242, 243)',
    color: 'rgb(83, 83, 83)'
  },

  dockedItem: {
    backgroundColor: '#270D0C',
    boxShadow: 'rgba(246, 246, 246, 0.27) -2px 2px',
    fontFamily: 'Arial',
    borderRadius: 2,
    color: '#F3F0F0',
    minHeight: 20,
    lineHeight: 2,
    display: 'inline-block',
    margin: 2,
    padding: '0 10px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#ddd'
    }
  }
};
