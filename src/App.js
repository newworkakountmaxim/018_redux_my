import React, { Component } from 'react';
// import {TaskList} from './components/TaskList';
import TaskList from "./components/TaskList";
import {addNewTask} from './store/actions';
//import {doneTask} from './store/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends Component {
  render() {

    //console.log(this.props);
    const {tasks, addNewTask} = this.props;

    return (
      <div className="App">
        <form action="" onSubmit={(event)=>{
          this.submitHandler(event, addNewTask)
        }}>
          <input type="text"/>
          <button>ADD TASK</button>
        </form>
        <TaskList tasks={tasks} />
      </div>
    );
  }

  submitHandler = (event,addNewTask) => {
    //const {addNewTask} = this.props; Можно было сделать так
    event.preventDefault();
    addNewTask(event.target[0].value);
    event.target.reset();
  }
}

const putStateToProps = (state) => {
    return{
      ...state
    }
};

const putActionsToComponent = (dispatch) => {
    //console.log(dispatch);
    return{
      addNewTask: bindActionCreators(addNewTask, dispatch)
    }
};



export default connect(
    putStateToProps,
    putActionsToComponent
)(App);
