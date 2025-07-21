import React from "react";
import "./TaskInfoDisplay.css";

const TaskInfoDisplay = (props) => {
    const { task, onClose } = props;
    if (!task) return null;

    return (
        <div className="task-info-display">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>{task.title}</h2>
        <p><strong>Status:</strong> {task.completed ? "Completed" : "Pending"}</p>
        <p><strong>Important:</strong> {task.priority ? "Yes" : "No"}</p>
        <p><strong>Task ID:</strong> {task.id}</p>
        </div>
    );
};

export default TaskInfoDisplay;
