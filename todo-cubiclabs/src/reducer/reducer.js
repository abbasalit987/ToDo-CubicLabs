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

// 👉 INITIAL STATE
export const initialState = {
  tasks: [],
  sideNavSelected: SIDE_NAV_OPTIONS.MY_DAY,
};

// 👉 REDUCER FUNCTION
export const reducer = (state, action) => {
  switch (action.type) {
    // ✅ ADD TASK
    case ACTIONS.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    // ✅ DELETE TASK
    case ACTIONS.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    // ✅ UPDATE TASK
    case ACTIONS.UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, ...action.payload }
            : task
        ),
      };

    // ✅ SET VALID SIDEBAR OPTION
    case ACTIONS.SET_SIDENAV: {
      if (!Object.values(SIDE_NAV_OPTIONS).includes(action.payload)) {
        console.warn(`❗ Invalid sideNavSelected value: "${action.payload}"`);
        return state; // or throw error
      }

      return {
        ...state,
        sideNavSelected: action.payload,
      };
    }

    // ⛔ DEFAULT FALLBACK
    default:
      return state;
  }
};
