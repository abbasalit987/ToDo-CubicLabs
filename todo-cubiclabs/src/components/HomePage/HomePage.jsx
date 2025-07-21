import React, { useEffect, useState, useReducer, use } from 'react'
import './HomePage.css'
import { ACTIONS, reducer, initialState } from '../../reducer/reducer'


const HomePage = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [errorResponse, setErrorResponse] = useState(false)

    useEffect(() => {

    }, [])

    return (
        <>
            {errorResponse && <div className="error-message">An error occurred while fetching tasks.</div>}
            <div className="home-page">
                <h1>To-Do List</h1>
                <div className="task-list">
                    {state.tasks.length > 0 ? (
                        state.tasks.map(task => (
                            <div key={task.id} className="task-item">
                                <span>{task.title}</span>
                                {/* <button onClick={() => dispatch({ type: ACTIONS.DELETE_TASK, payload: task.id })}>Delete</button> */}
                            </div>
                        ))
                    ) : (
                        <p>No tasks available.</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default HomePage