import React, { useState, useEffect } from "react";
import { ACTIONS } from "../../reducer/reducer";
import "./TaskInfoDisplay.css";

// Material UI Icons
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

const TaskInfoDisplay = ({ task, onClose, dispatch }) => {
  if (!task) return null;

  const [editedDescription, setEditedDescription] = useState(task.description || "");
  const [isEditingDescription, setIsEditingDescription] = useState(!task.description);
  const [copied, setCopied] = useState(false);

  // Watch status changes
  useEffect(() => {
    console.log("✅ Task status changed:", {
      completed: task.completed,
      priority: task.priority
    });
  }, [task.completed, task.priority]);

  // Copy to clipboard
  const handleCopyTaskId = () => {
    navigator.clipboard.writeText(task.id).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  // Delete task
  const handleDeleteTask = () => {
    dispatch({
      type: ACTIONS.DELETE_TASK,
      payload: task.id,
    });
    onClose(); // Optional: Close the details panel
  };

  // Edit/Save description
  const handleEditDescriptionClick = () => {
    setIsEditingDescription(true);
  };

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleSaveDescription = () => {
    const trimmed = editedDescription.trim();
    dispatch({
      type: ACTIONS.UPDATE_TASK,
      payload: {
        ...task,
        description: trimmed
      },
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

  return (
    <div className="task-info-display">

      {/* ✅ Task ID with Copy */}
      <div className="task-id-copy-row">
        <span className="task-id">#{task.id}</span>
        <ContentCopyIcon
          fontSize="small"
          className="copy-icon"
          titleAccess="Copy Task ID"
          onClick={handleCopyTaskId}
        />
        {copied && <span className="copy-feedback">Copied!</span>}
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
          <div className="description-text">
            {task.description || <i>No description</i>}
          </div>
        )}
      </div>

      {/* ✅ Buttons */}
      <div className="modification-buttons">
        {isEditingDescription ? (
          <DoneIcon
            className="done-button"
            onClick={handleSaveDescription}
            titleAccess="Save description"
          />
        ) : (
          <EditIcon
            className="edit-button"
            onClick={handleEditDescriptionClick}
            titleAccess="Edit description"
          />
        )}
        <DeleteIcon
          className="delete-button"
          onClick={handleDeleteTask}
          titleAccess="Delete task"
        />
      </div>

    </div>
  );
};

export default TaskInfoDisplay;
