export const ACTIONS ={
    ADD_TASK: 'add-task',
    DELETE_TASK: 'delete-task',

}

export const initialState = {
    tasks: [],
}

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            }
        case ACTIONS.DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload),
            }
        default:
            return state;
    }
}