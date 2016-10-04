import React, { Component } from 'react';
//import NavBar from './navBar';

// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux';
// import { example_action } from '../actions/actions';


export default class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) { 
//   return bindActionCreators ({
//     example_action
//   }, dispatch);
// }

// function mapStateToProps(state) { 
//   return {
//     example: state.example
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);