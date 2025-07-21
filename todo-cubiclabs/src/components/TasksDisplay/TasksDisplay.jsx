import React from 'react';
import './TasksDisplay.css';
import TaskItem from '../TaskItem/TaskItem.jsx';
import { SIDE_NAV_OPTIONS } from '../../reducer/reducer'; // import this to compare

const TasksDisplay = (props) => {
  const { tasks, sideNavOption, dispatch } = props
  const today = new Date().toDateString();

  const taskList = tasks.filter((task) => {
    const taskDate = new Date(task.createdDate).toDateString();

    switch (sideNavOption) {
      case SIDE_NAV_OPTIONS.MY_DAY:
        return taskDate === today;

      case SIDE_NAV_OPTIONS.IMPORTANT:
        return task.priority === true;

      case SIDE_NAV_OPTIONS.COMPLETED:
        return task.completed === true;

      case SIDE_NAV_OPTIONS.ALL:
        return true;

      default:
        return false; // fallback
    }
  });

  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <TaskItem
            key={task.id}
            taskDetails={task}
            dispatch={dispatch}
          />
        ))
      ) : (
        <div className="no-tasks-message">
          No tasks available for this category.
        </div>
      )}
    </>
  );
};

export default TasksDisplay;
