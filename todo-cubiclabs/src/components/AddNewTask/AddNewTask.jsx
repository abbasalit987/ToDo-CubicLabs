import React, { useState } from "react";
import { ACTIONS } from "../../reducer/reducer";

const AddNewTask = (props) => {
    const [taskText, setTaskText] = useState("");
    const [placeholder, setPlaceholder] = useState("Add a task");

    const dispatch = props.dispatch;
    const sideNavOption = props.sideNavOption;

  // 🔧 ID generator helper
  const generateTaskId = () => {
    const now = new Date();
    const pad = (n) => n.toString().padStart(2, '0');

    const day = pad(now.getDate());
    const month = pad(now.getMonth() + 1); // months are 0-based
    const year = now.getFullYear();
    const hour = pad(now.getHours());
    const minute = pad(now.getMinutes());
    const second = pad(now.getSeconds());

    return `${day}${month}${year}${hour}${minute}${second}`;
  };

  const handleAddTask = () => {
    const trimmed = taskText.trim();
    if (!trimmed) return;

    dispatch({
      type: ACTIONS.ADD_TASK,
      payload: {
        id: generateTaskId(),
        title: trimmed,
        description: "",
        completed: false,
        priority: sideNavOption
      },
    });

    setTaskText("");
    setPlaceholder("Add a task");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="add-new-task">
      <input
        type="text"
        value={taskText}
        placeholder={placeholder}
        onFocus={() => setPlaceholder("Try typing - Pay the utility bill by 6pm Friday")}
        onBlur={() =>
          placeholder.trim() === "" || taskText === ""
            ? setPlaceholder("Add a task")
            : null
        }
        onChange={(e) => setTaskText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default AddNewTask;
