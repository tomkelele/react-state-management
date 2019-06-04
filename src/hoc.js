import React from 'react';

const hoc = (Component, store) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: store.getData(),
      };
      store.subscribe(this.storeUpdate);
    }

    storeUpdate = data => {
      this.setState({
        data,
      });
    };

    render() {
      return <Component {...this.props} data={this.state.data}/>
    }
  }
};

export default hoc;