import React from 'react';
import { Map, List } from 'immutable';
import MFrame from './m-frame';
import Movable from './movable'

export default class Dsite extends React.Component {
	state = {
    data: Map({
      frames: List.of(
        //Map({
        //  x: 10,
        //  y: 20,
        //  content: <img src='http://andrej.xyz/blog/wp-content/uploads/2015/09/me.jpg' />
        //}),
        Map({
          x: 10,
          y: 20,
          isFocused: false,
          content: (
            <iframe width="550"
              height="350"
              src="http://www.wikipedia.org">
            </iframe>
          )
        }),
        Map({
          x: 20,
          y: 30,
          isFocused: false,
          content: <textarea rows='20' cols='30' />
        }),
        Map({
          x: 20,
          y: 30,
          isFocused: false,
          content: (
            <iframe width="560"
              height="315"
              src="https://www.youtube.com/embed/5BCZSpyO6q0"
              frameborder="0">
            </iframe>
          )
        })
      )
    })
	};

	render() {
		return (
      <div>
        {this.getImmutableState('frames').map((cNode, index) =>
          <Movable handleMove={this._changePosition.bind(this, index)}
                   makeFocused={this._makeFocused.bind(this, index)}
                   isFocused={this.getImmutableState('frames').get(index).get('isFocused')}
                   x={this.getImmutableState('frames').get(index).get('x')}
                   y={this.getImmutableState('frames').get(index).get('y')} >
            <MFrame children={cNode.get('content')} />
          </Movable>
        )}
      </div>
		);
	}

  _makeFocused(index) {
    this.setImmutableState('frames', (frms) =>
      frms.map((frm, i) => {
        return (index === i) ? frm.set('isFocused', true) : frm.set('isFocused', false)
      }));
  }

  getImmutableState(sel) {
    return this.state.data.get(sel);
  }

  setImmutableState(sel, updater) {
    this.setState(({data}) => ({
      data: data.update(sel, updater)
    }));
  }

  _changePosition(fIndex, x, y) {
    this.setImmutableState('frames', (frames) =>
      frames.update(fIndex, (frm) =>
        frm.set('x', x).set('y', y)));
  }

}
