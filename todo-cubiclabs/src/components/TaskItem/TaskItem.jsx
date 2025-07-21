import React, { useEffect, useState } from "react";
import { ACTIONS } from "../../reducer/reducer";
import TaskInfoDisplay from "../TaskInfoDisplay/TaskInfoDisplay";
import "./TaskItem.css";

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const TaskItem = ({ taskDetails, dispatch }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editedTitle, setEditedTitle] = useState(taskDetails.title);

  useEffect(() => {
    console.log(showInfo ? "🔍 Task Info Display is now visible." : "📦 Hidden.");
  }, [showInfo]);

  // Toggle completed
  const handleToggleComplete = (e) => {
    e.stopPropagation();
    dispatch({
      type: ACTIONS.UPDATE_TASK,
      payload: { ...taskDetails, completed: !taskDetails.completed },
    });
  };

  // Toggle priority
  const handleTogglePriority = (e) => {
    e.stopPropagation();
    dispatch({
      type: ACTIONS.UPDATE_TASK,
      payload: { ...taskDetails, priority: !taskDetails.priority },
    });
  };

  // Click to toggle info panel (you can keep or remove it)
  const handleOnClick = () => setShowInfo(!showInfo);

  // Save edited title
  const handleSaveTitle = () => {
    const trimmed = editedTitle.trim();
    if (trimmed && trimmed !== taskDetails.title) {
      dispatch({
        type: ACTIONS.UPDATE_TASK,
        payload: { ...taskDetails, title: trimmed },
      });
    }
    setIsEditingTitle(false);
  };

  // Trigger save on Enter
  const handleTitleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSaveTitle();
    }
  };

  return (
    <div className="taskitem-wrapper-main">
        <div className="taskitem-wrapper" onClick={handleOnClick}>
            <div className="taskitem-bar">
                {/* Completion icon */}
                <div className="completion-icon" onClick={handleToggleComplete}>
                {taskDetails.completed ? (
                    <CheckCircleIcon style={{ color: "white" }} />
                ) : (
                    <RadioButtonUncheckedIcon style={{ color: "#aaa" }} />
                )}
                </div>

                {/* Editable Title */}
                <div className="task-title-container">
                {isEditingTitle ? (
                    <input
                    className="task-title-input"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    onBlur={handleSaveTitle}
                    onKeyDown={handleTitleKeyDown}
                    autoFocus
                    />
                ) : (
                    <div
                    className={`task-title ${taskDetails.completed ? "completed" : ""}`}
                    onClick={(e) => {
                        e.stopPropagation(); // prevent triggering full card expansion
                        setIsEditingTitle(true);
                    }}
                    title="Click to edit"
                    >
                    {taskDetails.title}
                    </div>
                )}
                </div>
                </div>
                {/* Priority icon */}
                <div
                className="priority-button"
                onClick={handleTogglePriority}
                title="Mark as important"
                >
                {taskDetails.priority ? (
                    <StarIcon style={{ color: "#78BAFD" }} />
                ) : (
                    <StarBorderIcon style={{ color: "#aaa" }} />
                )}
                </div>

            {/* Optional detail component (can hide if not needed) */}
            </div>
            <div className="task-info">
                {showInfo && (
                <TaskInfoDisplay
                dispatch={dispatch}
                task={taskDetails}
                />
            )}
            </div>
        </div>
  );
};

export default TaskItem;
