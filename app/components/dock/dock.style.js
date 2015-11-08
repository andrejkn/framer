export default {
  dock: {
    height: 100,
    minWidth: 400,
    padding: 5,
    borderRadius: 3,
    border: '1px double #aaa',
    backgroundColor: '#333'
  },

  dockContent: {

  },

  dockItems: {
    float: 'left',
    width: '100%',
    padding: 0,
    margin: 0,
    listStyleType: 'none'
  },

  dockItem: {
    backgroundColor: '#eee',
    borderRadius: 2,
    color: '#000',
    minHeight: 20,
    lineHeight: 1,
    display: 'inline-block',
    margin: 2,
    padding: 2,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#ddd'
    }
  }
};
