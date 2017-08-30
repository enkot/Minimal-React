let nextTaskId = 0;

export const addTask = ({ text, executor }) => {
    return {
        type: 'ADD_TASK',
        id: (nextTaskId++).toString(),
        text,
        executor
    };
};

export const removeTask = (id) => {
    return {
        type: 'REMOVE_TASK',
        id
    };
};

export const changeTaskStatus = (id) => {
    return {
        type: 'CHANGE_TASK_STATUS',
        id
    };
};