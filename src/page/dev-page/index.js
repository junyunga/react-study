import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('testStore')
@observer
class DevPage extends Component {
  render() {
    const { testStore } = this.props;
    return (
      <div>
        <button onClick={testStore.showModal}>show</button>
        <button onClick={testStore.hideModal}>hide</button>
        <div>
          {
            testStore.isShowModal ? 'showModal' : 'hideModal'
          }
        </div>
      </div>

    )
  }
}

export default DevPage;