export default {
  dock: {
    height: 100,
    minWidth: 400,
    padding: 5,
    borderRadius: 5,
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
    color: '#270D0C',
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

  dockedItem: {
    backgroundColor: '#270D0C',
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
