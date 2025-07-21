import React, { useEffect, useState, useReducer } from 'react';
import './HomePage.css';
import { ACTIONS, reducer, initialState } from '../../reducer/reducer';
import TasksDisplay from '../TasksDisplay/TasksDisplay.jsx';
import AddNewTask from '../AddNewTask/AddNewTask.jsx';

const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errorResponse, setErrorResponse] = useState(false);

  const today = new Date();
  const weekday = today.toLocaleDateString('en-GB', { weekday: 'long' });
  const dayAndDate = today.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // ✅ Refresh logic: runs on every state update
  useEffect(() => {
    console.log('State updated!', state);

    // Example: store to localStorage
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
    localStorage.setItem('selectedView', state.sideNavSelected);

  }, [state]); // <- re-run when state changes

  return (
    <>
      {errorResponse && (
        <div className="error-message">
          An error occurred while fetching tasks.
        </div>
      )}

      <div className="home-page">
        <h1 className="homepage-title">My Day</h1>
        <h3 className="homepage-date">{`${weekday}, ${dayAndDate}`}</h3>

        <div className="task-list">
          {state.tasks.length > 0 ? (
            <TasksDisplay
              tasks={state.tasks}
              sideNavOption={state.sideNavSelected}
            />
          ) : (
            <AddNewTask dispatch={dispatch} />
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
