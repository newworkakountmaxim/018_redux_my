// import React from 'react';
// const TaskList = (props) => {
//     const {tasks} = props;
//
//
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

class TaskList extends Component {

    state = {
        tasks: this.props.tasks
    };




    render(){


        const {tasks} = this.state;
        console.log(tasks);
        return(
            <ul>
                {tasks.map((el, index) => (
                    <li key={index}>
                        {el.name}
                        {el.done?"":<button onClick={this.onDoneHandler}>Done</button>}
                        <button onClick={this.onRemoveHandler}>Remove</button>
                    </li>
                ))}
            </ul>
        );
    }
    onDoneHandler = () => {console.log('Done');};
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