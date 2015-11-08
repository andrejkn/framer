import React, { Component } from 'react';
import styles from './dock.style';

export default class Dock extends Component {
  render() {

    const { props } = this;

    const {
      dock,
      dockContent,
      dockItem,
      dockItems
    } = styles;

    const items = props.panes.map((pane, id) => (pane.get('status') === 'DOCKED') ?
      (
        <div
          onClick={ props.toggleFrameStatus.bind(null, id) }
          style={ styles.dockItem }>
          { pane.get('name') }
        </div>
      ) : null
    );

    return (
      <div style={ styles.dock }>
        { items }
      </div>
    );
  }
}
