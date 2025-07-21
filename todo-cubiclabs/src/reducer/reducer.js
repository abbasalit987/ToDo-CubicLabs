// 👉 ACTION TYPES
export const ACTIONS = {
  ADD_TASK: 'add-task',
  DELETE_TASK: 'delete-task',
  UPDATE_TASK: 'update-task',
  SET_SIDENAV: 'set-sidenav',
};

// 👉 VALID SIDENAV OPTIONS
export const SIDE_NAV_OPTIONS = {
  MY_DAY: 'myday',
  IMPORTANT: 'important',
  COMPLETED: 'completed',
  ALL: 'all',
};

// 👉 Load tasks from localStorage if available
const loadTasksFromLocalStorage = () => {
  try {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  } catch (err) {
    console.warn("⚠️ Failed to load tasks from localStorage", err);
    return [];
  }
};

// 👉 INITIAL STATE (with loaded tasks)
export const initialState = {
  tasks: loadTasksFromLocalStorage(),
  sideNavSelected: SIDE_NAV_OPTIONS.MY_DAY,
};

// 👉 REDUCER FUNCTION
export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case ACTIONS.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };

    case ACTIONS.UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, ...action.payload }
            : task
        ),
      };

    case ACTIONS.SET_SIDENAV:
      if (!Object.values(SIDE_NAV_OPTIONS).includes(action.payload)) {
        console.warn(`❗ Invalid sideNavSelected value: "${action.payload}"`);
        return state;
      }
      return {
        ...state,
        sideNavSelected: action.payload,
      };

    default:
      return state;
  }
};
