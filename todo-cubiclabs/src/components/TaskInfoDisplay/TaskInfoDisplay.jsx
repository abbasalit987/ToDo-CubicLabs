import React, { useState, useEffect } from "react";
import { ACTIONS } from "../../reducer/reducer";
import "./TaskInfoDisplay.css";

const TaskInfoDisplay = ({ task, onClose, dispatch }) => {
  if (!task) return null;

  const [editedTitle, setEditedTitle] = useState(task.title);
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const [editedDescription, setEditedDescription] = useState(task.description || "");
  const [isEditingDescription, setIsEditingDescription] = useState(!task.description);

  // ✅ Run only when completed or priority changes
  useEffect(() => {
    console.log("✅ Task status changed:");
    console.log("Completed:", task.completed);
    console.log("Priority:", task.priority);
  }, [task.completed, task.priority]);

  // 👉 Title handlers
  const handleTitleChange = (e) => setEditedTitle(e.target.value);

  const handleSaveTitle = () => {
    const trimmedTitle = editedTitle.trim();
    dispatch({
      type: ACTIONS.UPDATE_TASK,
      payload: {
        ...task,
        title: trimmedTitle,
      },
    });

    if (trimmedTitle === "") {
      setIsEditingTitle(true); // stay editing if empty
    } else {
      setIsEditingTitle(false);
    }
  };

  const handleTitleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSaveTitle();
    }
  };

  const handleClickTitle = () => {
    setIsEditingTitle(true);
  };

  // 👉 Description handlers
  const handleEditDescriptionClick = () => setIsEditingDescription(true);

  const handleDescriptionChange = (e) => setEditedDescription(e.target.value);

  const handleSaveDescription = () => {
    const trimmed = editedDescription.trim();
    dispatch({
      type: ACTIONS.UPDATE_TASK,
      payload: { ...task, description: trimmed },
    });

    if (trimmed === "") {
      setIsEditingDescription(true);
    } else {
      setIsEditingDescription(false);
    }
  };

  const handleDescriptionKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSaveDescription();
    }
  };

  // ✅ Status toggles
  const handleToggleImportant = () => {
    dispatch({
      type: ACTIONS.UPDATE_TASK,
      payload: { ...task, priority: !task.priority },
    });
  };

  const handleToggleCompleted = () => {
    dispatch({
      type: ACTIONS.UPDATE_TASK,
      payload: { ...task, completed: !task.completed },
    });
  };

  return (
    <div className="task-info-display">
      <button className="close-btn" onClick={onClose}>✖</button>

      {/* ✅ Title Section */}
      <div className="task-title-section">
        {isEditingTitle ? (
          <input
            type="text"
            value={editedTitle}
            onChange={handleTitleChange}
            onKeyDown={handleTitleKeyDown}
            onBlur={handleSaveTitle}
            placeholder="Task title"
            className="task-title-input"
            autoFocus
          />
        ) : (
          <h2 className="task-title-view" onClick={handleClickTitle}>
            {task.title || "Untitled Task (Click to edit)"}
          </h2>
        )}
      </div>

      {/* 💡 Task ID + Status Controls */}
      <p><strong>Task ID:</strong> {task.id}</p>

      <div className="task-info-controls">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleCompleted}
        />
        <button onClick={handleToggleImportant}>
          {task.priority ? "★" : "☆"}
        </button>
      </div>

      {/* ✅ Description Section */}
      <div className="task-description-section">
        {isEditingDescription ? (
          <textarea
            value={editedDescription}
            onChange={handleDescriptionChange}
            onKeyDown={handleDescriptionKeyDown}
            placeholder="Add description here"
            className="task-description-area"
            autoFocus
          />
        ) : (
          <div>
            <p className="description-text">
              {task.description || <i>No description</i>}
            </p>
            <button
              onClick={handleEditDescriptionClick}
              className="edit-description-button"
            >
              ✏️ Edit Description
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskInfoDisplay;
