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
      const dockItem = (pane.get('status') === 'DOCKED') ?
        styles.dockedItem : styles.undockedItem;

      return (
        <div
          onClick={ handleClick.bind(this, id) }
          style={ dockItem }>
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
