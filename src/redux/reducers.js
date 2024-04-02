

const taskReducer = (state = { tasks: [] }, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: action.payload
      };
    case "DELETE_TASK":
      return {
      tasks : action.payload
      };
    default:
      return state;
  }
};

export default taskReducer;
