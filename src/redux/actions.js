
export const addTask = (task) => (dispatch, getState) => {
  const {
    Task : {tasks},
  } = getState();

  const hasTask = tasks.find((i) => i.task === task);

  if(!hasTask && task !== ""){
    dispatch({
        type: "ADD_TASK",
        payload: [{id : task, task}, ...tasks],
    });
  }
};


export const deleteTask = (task) => (dispatch,getState) => {
    const {
        Task : {tasks},
    }=getState();
    
    dispatch({
        type : "DELETE_TASK",
        payload : tasks.filter((t) => t.id !== task.id),
    })
    };

    export const toggleTask = (taskId) => (dispatch, getState) => {
      const {
        Task : {tasks},
      } = getState();
    
      const updatedTasks = tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed }; // Toggle completion status
        }
        return task;
      });
    
      dispatch({
        type: "TOGGLE_TASK",
        payload: taskId,
        tasks: updatedTasks,
      });
    };

