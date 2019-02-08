import {ADD_NEW_TASK, DONE_TASK, REMOVE_TASK} from "../index";

const initState = {
    tasks: [
        {name: "Wake up", done:false}
    ],
    user: null
};

export const reducer = (state=initState,action) => {
    console.log(action);

    switch  (action.type) {
        case ADD_NEW_TASK:
            console.log(888);
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {name: action.payload, done:false}
                ]
            };
        case DONE_TASK:
            console.log(111);
            state.tasks[action.payload].done = true;
            return {
                ...state,
                tasks: state.tasks
                //tasks: state.tasks.map((el, i) => action.payload === i?{...el, done:true}:el) //вариант 2
            };
        // case REMOVE_TASK:
        //     return {
        //         ...state,
        //         tasks: [
        //             ...state.tasks,
        //             {name: action.payload}
        //         ]
        //     }
    }
    return state;
};