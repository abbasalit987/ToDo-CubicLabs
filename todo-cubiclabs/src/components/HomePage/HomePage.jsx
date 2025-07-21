import React, { useEffect, useState, useReducer } from 'react';
import './HomePage.css';
import { ACTIONS, reducer, initialState } from '../../reducer/reducer';
import TasksDisplay from '../TasksDisplay/TasksDisplay.jsx';
import AddNewTask from '../AddNewTask/AddNewTask.jsx';
import SideBarNav from '../SideBarNav/SideBarNav.jsx';

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

  const handleNavBarItemSelect = (option) => {
    dispatch({
      type: ACTIONS.SET_SIDENAV,
      payload: option
    });
  };

  useEffect(() => {
    console.log('State updated!', state);

    localStorage.setItem('tasks', JSON.stringify(state.tasks));
    localStorage.setItem('selectedView', state.sideNavSelected);

  }, [state]);

  return (
    <>
      {errorResponse && (
        <div className="error-message">
          An error occurred while fetching tasks.
        </div>
      )}

      <div className="sidebar-nav">
        <SideBarNav 
            sideNavSelected={state.sideNavSelected}
            onSelect={handleNavBarItemSelect}
            dispatch={dispatch}
        />
      </div>

      <div className="home-page">
        <h1 className="homepage-title">My Day</h1>
        <h3 className="homepage-date">{`${weekday}, ${dayAndDate}`}</h3>

        <div className="task-list">
          {state.tasks.length > 0 ? (
            <TasksDisplay
              dispatch={dispatch}
              tasks={state.tasks}
              sideNavOption={state.sideNavSelected}
            />
          ) : (
            <div className="no-tasks-message">
              No tasks available for this category.
            </div>  
          )}
          <AddNewTask 
              dispatch={dispatch} 
              sideNavOption={state.sideNavSelected}
            />
        </div>
      </div>
    </>
  );
};

export default HomePage;
