import React, { Component } from 'react';
import styles from './dock.style';

export default class Dock extends Component {
  render() {

    const {
      props,
      handleClick
    } = this;

    const {
      dock,
      dockContent,
      dockItem
    } = styles;

    const items = props.panes.map((pane, id) => {
      const isDocked = (pane.get('status') === 'DOCKED');
      const isFocused = (props.panes.size === pane.get('focusLevel'));

      const dockItem = isDocked ?
        styles.dockedItem : styles.undockedItem;
      const focusedItem = (isFocused && !isDocked) ? styles.focusedItem : {};
      const itemStyle = Object.assign({}, dockItem, focusedItem);

      return (
        <div
          onClick={ handleClick.bind(this, id) }
          style={ itemStyle }>
          { pane.get('name') }
        </div>
      )
    });

    return (
      <div style={ styles.dock }>
        { items }
      </div>
    );
  }

  handleClick = (id) => {
    const { props } = this;

    props.toggleFrameStatus(id);
    props.makeFocused(id);
  }
}
