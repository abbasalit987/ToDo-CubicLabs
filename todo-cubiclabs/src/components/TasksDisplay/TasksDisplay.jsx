import React from 'react'
import './TasksDisplay.css'
import TaskItem from '../TaskItem/TaskItem.jsx'

const TasksDisplay = (props) => {
    const sideNavOption = props.sideNavOption;
    const tasks = props.tasks;
    const taskList = tasks.filter(task => task.priority === sideNavOption);

    return (
        <>
            {taskList.length > 0 ? (
                taskList.map((task) => (
                    < TaskItem
                        key={task.id}
                        taskDetails={task}
                        dispatch={props.dispatch}
                    />
                ))
            ) : (
                <div className="no-tasks-message">
                    No tasks available for this category.
                </div>
            )}
        </>
    )
    
}

export default TasksDisplay