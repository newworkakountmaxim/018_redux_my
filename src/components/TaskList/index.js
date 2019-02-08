// import React from 'react';
// const TaskList = (props) => {
//     const {tasks} = props;
//     console.log(tasks);
//     return(
//         <ul>
//             {tasks.map((el, index) => (
//                 <li key={index}>
//                     {el.name}
//                     {el.done?"":<button onClick={onDoneHandler}>Done</button>}
//                     <button onClick={onRemoveHandler}>Remove</button>
//                 </li>
//             ))}
//         </ul>
//     )
// };
// const onDoneHandler = () => {console.log('Done');};
// const onRemoveHandler = () => {console.log('Remove');};


import React, { Component } from 'react';
import {doneTask} from '../../store/actions';
import {connect} from 'react-redux';


class TaskList extends Component {

    state = {
        tasks: this.props.tasks
    };

    render(){

        const {tasks} = this.state;
        console.log(this.state);
        return(
            <ul>
                {tasks.map((el, index) => (
                    //console.log(el);
                    <li key={index}>
                        {el.name}
                        {/*{el.done?"":<button onClick={this.onDoneHandler()}>Done</button>}*/}
                        {el.done?"":<button onClick={()=>{this.onDoneHandler(el, doneTask)}}>Done</button>}
                        <button onClick={this.onRemoveHandler}>Remove</button>
                    </li>
                ))}
            </ul>
        );
    }
    onDoneHandler = (el, doneTask) => {
        doneTask(el);
        console.log(el);
    };
    onRemoveHandler = () => {console.log('Remove');};


    componentWillReceiveProps(nextProps, nextContext){
        this.setState({
            tasks: nextProps.tasks
        });
    }

    // componentDidMount() {
    //     this.setState({
    //         tasks: this.state.tasks
    //     })
    // }
}

export default TaskList;
// export default connect(
//     putStateToProps,
//     putActionsToComponent
// )(App);