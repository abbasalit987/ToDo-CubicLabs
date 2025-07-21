import React, { useEffect, useState } from "react";
import { ACTIONS } from "../../reducer/reducer";
import TaskInfoDisplay from "../TaskInfoDisplay/TaskInfoDisplay";
import "./TaskItem.css";

const TaskItem = (props) => {
  const { taskDetails, dispatch } = props;
  const [showInfo, setShowInfo] = useState(false);

  // ✅ Listen to state updates like a 'watch'
  useEffect(() => {
    if (showInfo) {
      console.log("🔍 Task Info Display is now visible.");
    } else {
      console.log("📦 Task Info Display is hidden.");
    }
  }, [showInfo]);

  const handleToggleComplete = (e) => {
    e.stopPropagation();
    dispatch({
      type: ACTIONS.UPDATE_TASK,
      payload: {
        ...taskDetails,
        completed: !taskDetails.completed,
      },
    });
  };

  const handleTogglePriority = (e) => {
    e.stopPropagation();
    dispatch({
      type: ACTIONS.UPDATE_TASK,
      payload: {
        ...taskDetails,
        priority: !taskDetails.priority,
      },
    });
  };

  const handleOnClick = () => {
    setShowInfo(true); // 📌 Controls visibility
  };

  const handleCloseInfo = () => {
    setShowInfo(false); // 📌 Hides panel
  };

  return (
    <div className="taskitem-wrapper">
      <div className="taskitem-bar" onClick={handleOnClick}>
        <input
          type="checkbox"
          checked={taskDetails.completed}
          onClick={handleToggleComplete}
          readOnly
        />

        <div
          className={`task-title ${taskDetails.completed ? "completed" : ""}`}
        >
          {taskDetails.title}
        </div>

        <button
          className="priority-button"
          onClick={handleTogglePriority}
          title="Mark as important"
        >
          {taskDetails.priority ? "★" : "☆"}
        </button>
      </div>

      {/* ✅ Reactively rendered based on state */}
      {showInfo && (
        <TaskInfoDisplay dispatch={dispatch} task={taskDetails} onClose={handleCloseInfo} />
      )}
    </div>
  );
};

export default TaskItem;
