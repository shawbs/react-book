import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { doLogin } from '../store/action';

class App extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    // console.log(this.props)
  }
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App

// 以下代码是连接 storet和组件之间，作为 props读取,且此组件以外不能获取
// const mapStateToProps = function(store) {
//   return {
//     store
//   };
// };
// export default connect(mapStateToProps)(App);


