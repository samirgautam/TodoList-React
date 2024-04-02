const taskReducer = (state = { tasks: [] }, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: action.payload,
      };
    case "TOGGLE_TASK":
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return { ...task, completed: !task.completed };
          }
          return task;
        }),
      };
    case "DELETE_TASK":
      return {
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
