import {ADD_NEW_TASK, DONE_TASK, REMOVE_TASK} from "../index";

export const addNewTask = (task) => {
    return{
        type: ADD_NEW_TASK,
        payload: task
    }
};

export const doneTask = (task) => {
    return{
        type: DONE_TASK,
        payload: task
    }
};

export const removeTask = (task) => {
    return{
        type: REMOVE_TASK,
        payload: task
    }
};